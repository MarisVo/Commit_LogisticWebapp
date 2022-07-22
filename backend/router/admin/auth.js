import express from 'express'
import argon2 from "argon2"
import { sendError, sendServerError, sendSuccess } from '../../helper/client.js'
import Staff from '../../model/Staff.js'
import User from '../../model/User.js'
import { staffRegisterValidate } from '../../validation/auth.js'
import Customer from '../../model/Customer.js'

const authAdminRoute = express.Router()

/**
 * @route POST /api/admin/auth/register
 * @description register staff account
 * @access private
 */
authAdminRoute.post('/register',
    async (req, res) => {
        const errors = staffRegisterValidate(req.body)
        if (errors)
            return sendError(res, errors)

        let { name, email, password, phone, staff_type } = req.body

        try {
            const isExist = await User.exists({
                $or: [
                    { email, phone },
                    { email, phone: null },
                    { phone, email: null }
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
                name, email, password, phone, role: newStaff._id, isActive: true
            })
        } catch (error) {
            return sendServerError(res)
        }
        return sendSuccess(res, 'user registered successfully.')
    }
)

/**
 * @route GET /api/admin/auth/unaccepted-register
 * @description get list of unaccepted registers of business account
 * @access private
 */
authAdminRoute.get('/unaccepted-register',
    async (req, res) => {
        try {
            const businesses = await User.find({ isActive: true })
                .populate({ path: 'role', model: Customer })
            const result = businesses.filter(value => {
                return value.role && value.role.customer_type === 'business' && value.role.accepted_business === false
            })
            return sendSuccess(res, 'success', result)
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
* @route PUT /api/admin/auth/accept-register/:customerId
* @description accept active the business's register
* @access private
*/
authAdminRoute.put('/accept-register/:customerId',
    async (req, res) => {
        try {
            const business = await Customer.findOneAndUpdate({ _id: req.params.customerId, accepted_business: false }, { accepted_business: true })
            if (!business) return sendError(res, 'this customer does not exist or was accepted register.')
            return sendSuccess(res, 'accepted successfully.')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

export default authAdminRoute