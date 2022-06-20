import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { createOrderValidate } from "../validation/order.js"
import { verifyToken } from '../middleware/index.js'
import DeliveryService from '../model/DeliveryService.js'
import Order from "../model/Order.js"
import { genarateOrderID } from "../service/order.js"

const orderRoute = express.Router()

/**
 * @route POST /api/order/create
 * @description customer create a new order
 * @access public
 */
orderRoute.post('/create',
    // verifyToken,
    async (req, res) => {
        const errors = createOrderValidate(req.body)
        if (errors) return sendError(res, errors)

        const { serviceId, serviceName } = req.body

        try {
            const service = await DeliveryService.findOne({
                $or: [
                    { _id: serviceId },
                    { name: serviceName }
                ]
            })
            if (!service) return sendError(res, 'the service is not exist.')

            const orderId = await genarateOrderID()
            await Order.create({ orderId, service })
            return sendSuccess(res, 'create new order successfully')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


export default orderRoute