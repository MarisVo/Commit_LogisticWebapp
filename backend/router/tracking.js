import express from "express"
import { calculateShipmentFee, PRODUCT_UNIT } from "../constant.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { lookupPostageValidate } from "../validation/tracking.js"
import DeliveryService from '../model/DeliveryService.js'
import Distance from '../model/Distance.js'
import Order from "../model/Order.js"
import Warehouse from '../model/Warehouse.js'

const trackingRoute = express.Router()

/**
 * @route POST /api/look-up/postage
 * @description customer look up a postage
 * @access public
 */
trackingRoute.post('/postage', async (req, res) => {
    const errors = lookupPostageValidate(req.body)
    if (errors) return sendError(res, errors)

    const { fromProvince, fromDistrict, fromWard, toProvince, toDistrict, toWard, unit, quantity, serviceId, serviceName } = req.body

    try {
        const sv = await DeliveryService.findOne({
            $or: [
                { _id: serviceId },
                { name: serviceName }
            ]
        }).populate('price')
        if (!sv) return sendError(res, 'the service is not exist.')

        const distances = await Distance.find({
            fromProvince,
            toProvince
        })
        let distance = null
        distances.some(value => {
            if (sv.distances.includes(value._id)) {
                distance = value
                return true
            }
            return false
        })
        if (!distance) return sendError(res, 'the service don\'t support this road.')

        let result = 0
        if (unit === PRODUCT_UNIT.KG) {
            result = calculateShipmentFee(distance, quantity, sv.price.uKG)
        }
        else if (unit === PRODUCT_UNIT.TON) {
            result = calculateShipmentFee(distance, quantity, sv.price.uTON)
        }
        else {
            result = calculateShipmentFee(distance, quantity, sv.price.uM3)
        }
        return sendSuccess(res, 'calculate shipment fee successfully.', { result })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/order/:lstOrderId
 * @description get list of order
 * @access public
 */
trackingRoute.get('/order/:lstOrderId', async (req, res) => {
    try {
        const lstOrderId = req.params.lstOrderId.split('&')
        const orders = await Order.find({
            orderId: { $in: lstOrderId }
        })
        return sendSuccess(res, 'request successfully', { orders, success: orders.length, failure: lstOrderId.length - orders.length })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/warehouse
 * @description get list of warehouses by province and district query
 * @access public
 */
trackingRoute.get('/warehouse', async (req, res) => {
    const { province, district } = req.query
    try {
        const warehouses = await Warehouse.find({
            province,
            district
        })
        return sendSuccess(res, 'request successfully', warehouses)
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default trackingRoute