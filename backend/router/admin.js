import express from "express"
import argon2 from "argon2"
import User from "../model/User.js"
import { staffRegisterValidate } from "../validation/auth.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Staff from "../model/Staff.js"
import { verifyAdmin, verifyToken } from "../middleware/index.js"
import { RETURN_ZONE } from "../constant.js"
import Price from "../model/Price.js"
import { createPriceValidate, createServiceValidate } from "../validation/service.js"
import DeliveryService from "../model/DeliveryService.js"

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
    })

/**
 * @route POST /api/admin/service/:serviceId/price/create
 * @description create price table for delivery service
 * @access private
 */
adminRoute.post('/service/:serviceId/price/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createPriceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const validateTypesOfData = Object.values(req.body).every(value => {
            return Array.isArray(value) && value.every(v => {
                return v.hasOwnProperty('next') && v.hasOwnProperty('sidestep') && v.hasOwnProperty('prices') && Array.isArray(v.prices) && v.prices.length === Object.keys(RETURN_ZONE).length
            })
        })
        if (!validateTypesOfData)
            return sendError(res, 'request\'s body is incorrect.')

        const { kg, ton, m3 } = req.body

        try {
            const service = await DeliveryService.exists({ _id: req.params.serviceId })
            if (service) {
                const price = await Price.create({
                    uKG: kg,
                    uM3: m3,
                    uTON: ton
                })
                await DeliveryService.findOneAndUpdate({ _id: service._id }, { price: price._id })
            }
            return sendSuccess(res, 'create price table successfully.')
        }
        catch (error) {
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/service/create
 * @description create new delivery service
 * @access private
 */
adminRoute.post('/service/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createServiceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { name, subDetail, target } = req.body

        try {
            await DeliveryService.create({
                name,
                sub_detail: subDetail,
                target
            })
            return sendSuccess(res, 'create new service successfully.')
        }
        catch (error) {
            return sendServerError(res)
        }
    })

export default adminRoute