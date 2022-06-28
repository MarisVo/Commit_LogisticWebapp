import express from 'express'
import { unlinkSync } from 'fs'
import { handleFilePath, RETURN_ZONE, upload } from '../../constant.js'
import { sendError, sendServerError, sendSuccess } from '../../helper/client.js'
import { createUploadDir } from '../../middleware/index.js'
import DeliveryService from '../../model/DeliveryService.js'
import Distance from '../../model/Distance.js'
import Price from '../../model/Price.js'
import { createDistanceValidate, createPriceValidate, createServiceValidate, uploadPricelistValidate } from '../../validation/service.js'

const serviceAdminRoute = express.Router()

/**
* @route POST /api/admin/service/:serviceId/price/create
* @description create price table for delivery service
* @access private
*/
serviceAdminRoute.post('/:serviceId/price/create',
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
    }
)

/**
 * @route POST /api/admin/service/:serviceId/pricelist
 * @description upload price files for service
 * @access private
 */
serviceAdminRoute.post('/:serviceId/pricelist',
    createUploadDir,
    upload.single('pricelist'),
    async (req, res) => {
        const errors = uploadPricelistValidate(req.body)
        if (errors) {
            if (req.file) unlinkSync(req.file.path)
            return sendError(res, errors)
        }
        const file = handleFilePath(req.file)

        const { province } = req.body

        try {
            const isExist = await DeliveryService.exists({ _id: req.params.serviceId })
            if (isExist) {
                await DeliveryService.updateOne({
                    _id: isExist._id
                },
                    {
                        $push: { price_files: { province, file } }
                    })
                return sendSuccess(res, 'upload pricelist file successfully')
            }
            if (req.file) unlinkSync(req.file.path)
            return sendError(res, "product's name had existed.")
        } catch (error) {
            if (req.file) unlinkSync(req.file.path)
            return sendServerError(res)
        }
    }
)

/**
 * @route POST /api/admin/service/:serviceId/distance/create
 * @description create delivery road for delivery service
 * @access private
 */
serviceAdminRoute.post('/:serviceId/distance/create',
    async (req, res) => {
        const errors = createDistanceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { fromProvince, toProvince, zonecode } = req.body

        try {
            const service = await DeliveryService.exists({ _id: req.params.serviceId })
            if (service) {
                const distance = await Distance.create({
                    fromProvince,
                    toProvince,
                    zonecode
                })
                await DeliveryService.findOneAndUpdate({ _id: service._id }, { $push: { distances: distance } })
            }
            return sendSuccess(res, 'create distance successfully.')
        }
        catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route POST /api/admin/service/create
 * @description create new delivery service
 * @access private
 */
serviceAdminRoute.post('/create',
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
            console.log(error)
            return sendServerError(res)
        }
    }
)

export default serviceAdminRoute