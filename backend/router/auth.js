import express from "express"
import jwt from "jsonwebtoken"
import argon2 from "argon2"
import User from "../model/User.js"
import { userLoginValidate, customerRegisterValidate, userVerifyOTP, userUpdateOTP } from "../validation/auth.js"
import { sendError, sendServerError, sendSuccess, sendAutoMail } from "../helper/client.js"
import Customer from "../model/Customer.js"
import Staff from "../model/Staff.js"
import CustomerVerifyOTP from '../model/CustomerVerifyOTP.js'
import { createOTP, JWT_EXPIRED, OTP_EXPIRED, updateOTP, VERIFY_OP } from '../constant.js'

const authRoute = express.Router()

/**
 * @route POST /api/auth/verify-token
 * @description verify user with access token
 * @access public
 */
authRoute.post('/verify-token', (req, res) => {
    const { token } = req.body
    try {
        const { payload } = jwt.verify(token, process.env.JWT_SECRET_KEY, {
            complete: true
        })
        return sendSuccess(res, "Verify token successfully.", {
            user: payload.user
        })
    } catch (error) {
        return sendError(res, "Unauthorzied.", 401)
    }
})

/**
 * @route POST /api/auth/register
 * @description customer register
 * @access public
 */
authRoute.post('/register', async (req, res) => {
    const errors = customerRegisterValidate(req.body)
    if (errors)
        return sendError(res, errors)

    let { name, email, password, phone, address, discription, customer_type, verify_op } = req.body

    try {
        const isExist = await User.exists({
            $or: [
                { email },
                { phone }
            ]
        })
        if (isExist)
            return sendError(res, 'user is exist')

        let otp = await createOTP()
        if (otp == null) {
            return sendServerError(res)
        }

        if (verify_op === VERIFY_OP.email) {
            const options = {
                from: process.env.MAIL_HOST,
                to: email,
                subject: '[noreply-Logistics Webapp] Xác thực email',
                html: `<p>Nhập mã OTP để hoàn tất đăng ký: <i><b>${otp}</b></i></p>`
            }
            const sendMailSuccess = await sendAutoMail(options)
            if (!sendMailSuccess) return sendError(res, 'send OTP failed.')
        }

        password = await argon2.hash(password)
        otp = await argon2.hash(otp)

        const newCustomer = await Customer.create({
            name,
            address,
            discription,
            customer_type
        })

        const newUser = await User.create({
            name, email, password, phone, role: newCustomer._id
        })

        const customerVerifyOTP = await CustomerVerifyOTP.create({
            otp_code: otp,
            user: newUser._id
        })
        return sendSuccess(res, 'send otp code successfully.', { userId: customerVerifyOTP.user })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/auth/verify-otp
 * @description customer verify otp
 * @access public
 */
authRoute.post('/verify-otp', async (req, res) => {
    const errors = userVerifyOTP(req.body)
    if (errors)
        return sendError(res, errors)

    const { userId, otp } = req.body

    try {
        const verifyOTP = await CustomerVerifyOTP.findOne({
            user: userId,
            updatedAt: {
                $gt: Date.now() - OTP_EXPIRED
            }
        })
        if (!verifyOTP)
            return sendError(res, 'validate failed.')
        else if(await argon2.verify(verifyOTP.otp_code, otp))
        
        await User.findByIdAndUpdate(userId, { isActive: true })
        await CustomerVerifyOTP.remove({_id: verifyOTP._id})
        return sendSuccess(res, 'user registered successfully.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/auth/update-otp
 * @description customer update otp
 * @access public
 */
 authRoute.post('/update-otp', async (req, res) => {
    const errors = userUpdateOTP(req.body)
    if (errors)
        return sendError(res, errors)

    let { userId, verify_op } = req.body

    try {
        const otp = await updateOTP(userId)
        if (otp == null) {
            return sendServerError(res)
        }

        if (verify_op === VERIFY_OP.email) {
            const user = await User.findById(userId)
            const options = {
                from: process.env.MAIL_HOST,
                to: user.email,
                subject: '[noreply-Logistics Webapp] Xác thực email',
                html: `<p>Nhập mã OTP để hoàn tất đăng ký: <i><b>${otp}</b></i></p>`
            }
            const sendMailSuccess = await sendAutoMail(options)
            if (!sendMailSuccess) return sendError(res, 'send OTP failed.')
        }
        return sendSuccess(res, 'update OTP successfully.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/auth/login
 * @description customer login
 * @access public
 */
authRoute.post('/login', async (req, res) => {
    const errors = userLoginValidate(req.body)
    if (errors)
        return sendError(res, errors)

    let { email, phone, password } = req.body
    try {
        const user = await User.findOne({
            $or: [
                { email },
                { phone }
            ],
            isActive: true
        }).populate({ path: 'role', model: Customer })
        let success = true
        if (!user) success = false
        else if (!user.role)
            return sendError(res, 'your role is not valid. access denied.', 403)
        else {
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid) success = false
        }

        if (!success)
            return sendError(res, 'email/phone or password is wrong.')

        const userData = {
            id: user._id,
            email: user.email,
            phone: user.phone,
            role: user.role
        }
        const accessToken = jwt.sign(
            {
                user: userData
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: JWT_EXPIRED
            }
        )

        return sendSuccess(res, 'Login successfully.', {
            token: accessToken,
            user: userData
        })
    } catch (error) {
        return sendServerError(res)
    }
})

/**
 * @route POST /api/auth/staff-login
 * @description staff login
 * @access public
 */
authRoute.post('/staff-login', async (req, res) => {
    const errors = userLoginValidate(req.body)
    if (errors)
        return sendError(res, errors)

    let { email, phone, password } = req.body
    try {
        const user = await User.findOne({
            $or: [
                { email },
                { phone }
            ]
        }).populate({ path: 'role', model: Staff })
        let success = true
        if (!user) success = false
        else if (!user.role)
            return sendError(res, 'your role is not valid. access denied.', 403)
        else {
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid) success = false
        }

        if (!success)
            return sendError(res, 'email/phone or password is wrong.', 400)

        const userData = {
            id: user._id,
            email: user.email,
            phone: user.phone,
            role: user.role
        }
        const accessToken = jwt.sign(
            {
                user: userData
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: JWT_EXPIRED
            }
        )

        return sendSuccess(res, 'login successfully.', {
            token: accessToken,
            user: userData
        })
    } catch (error) {
        return sendServerError(res)
    }
})

export default authRoute
