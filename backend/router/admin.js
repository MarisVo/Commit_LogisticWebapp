import express from "express"
import argon2 from "argon2"
import User from "../model/User.js"
import { staffRegisterValidate } from "../validation/auth.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Staff from "../model/Staff.js"
import { verifyAdmin, verifyToken } from "../middleware/index.js"

const adminRoute = express.Router()
/**
 * @route POST /api/admin/auth/register
 * @description register staff account
 * @access private
 */
adminRoute.post('/auth/register',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = staffRegisterValidate(req.body)
        if (errors)
            return sendError(res, errors)

        let { name, email, password, phone, staff_type } = req.body

        try {
            const isExist = await User.exists({
                $or: [
                    { email },
                    { phone }
                ]
            })
            if (isExist)
                return sendError(res, 'user is exist')

            const newStaff = await Staff.create({
                name,
                staff_type
            })

            password = await argon2.hash(password)
            await User.create({
                name, email, password, phone, role: newStaff._id
            })
        } catch (error) {
            return sendServerError(res)
        }
        return sendSuccess(res, 'user registered successfully.')
    })

export default adminRoute