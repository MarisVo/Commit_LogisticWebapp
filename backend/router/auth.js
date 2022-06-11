import express from "express"
import jwt from "jsonwebtoken"
import argon2 from "argon2"
import User from "../model/User.js"
import { userLoginValidate, customerRegisterValidate } from "../validation/auth.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Customer from "../model/Customer.js"
import Staff from "../model/Staff.js"

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

    let { name, email, password, phone, address, discription, customer_type } = req.body

    try {
        const isExist = await User.exists({
            $or: [
                { email },
                { phone }
            ]
        })
        if (isExist)
            return sendError(res, 'user is exist')
        
        const newCustomer = await Customer.create({
            name,
            address,
            discription,
            customer_type
        })

        password = await argon2.hash(password)
        await User.create({
            name, email, password, phone, role: newCustomer._id
        })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
    return sendSuccess(res, 'user registered successfully.')
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
            ]
        }).populate({path: 'role', model: Customer})
        let success = true
        if (!user) success = false
        else if(!user.role)
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
                expiresIn: "24h"
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
        }).populate({path: 'role', model: Staff})
        let success = true
        if (!user) success = false
        else if(!user.role)
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
                expiresIn: "24h"
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

export default authRoute
