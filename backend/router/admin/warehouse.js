import express from 'express'
import { sendError, sendRequest, sendServerError, sendSuccess } from '../../helper/client.js'
import Warehouse from '../../model/Warehouse.js'
import { createWarehouseValidate } from '../../validation/warehouse.js'

const warehouseAdminRoute = express.Router()

/**
 * @route POST /api/admin/warehouse/create
 * @description create new warehouse
 * @access private
 */
warehouseAdminRoute.post('/create',
    async (req, res) => {
        const errors = createWarehouseValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { name, phone, street, ward, district, province } = req.body

        try {
            const isExist = await Warehouse.exists({ name })
            if (isExist) return sendError(res, 'the warehouse\'s name is existed.')

            const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${street},${ward},${district},${province}`
            const result = await sendRequest(url, 'GET')
            if (result.status === 200 && result.data.length > 0) {
                const { lon, lat } = result.data[0]
                await Warehouse.create({
                    name, phone, street, ward, district, province, lon, lat
                })
                return sendSuccess(res, 'create new warehouse successfully.')
            }
            return sendError(res, 'supplied address does not exist.')
        }
        catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

export default warehouseAdminRoute