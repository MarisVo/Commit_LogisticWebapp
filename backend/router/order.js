import express from "express"
import opencage from "opencage-api-client"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { createOrderValidate } from "../validation/order.js"
import { verifyToken, verifyCustomer, verifyCustomerOrAdmin} from '../middleware/index.js'
import { genarateOrderID } from "../service/order.js"
import DeliveryService from '../model/DeliveryService.js'
import Order from "../model/Order.js"
import Product from "../model/Product.js"
import Receiver from "../model/Receiver.js"
import Customer from "../model/Customer.js"
import User from "../model/User.js"
const OPENCAGE_API_KEY='7f8d6f65dfd846748331d3c5e0a52070'

const orderRoute = express.Router()

/**
 * @route POST /api/order/create
 * @description customer create a new order
 * @access public
 */
orderRoute.post('/create',
    verifyToken,
    verifyCustomerOrAdmin,
    async (req, res) => {
        const errors = createOrderValidate(req.body)
        if (errors) return sendError(res, errors)
        const {customerPhone, customerEmail, serviceName, receiver, origin, destination } = req.body
        const {name, phone, identity} = receiver
        try {
            const userId = req.user.role._id
            var customerId = null   
            //Check whether user is customer or admin         
            const checkUser = await Customer.exists({_id: userId})
            if (checkUser) { //If user is customer
                customerId = userId
            }            
            else {            //If user is admin
                const customer = await User.findOne({
                    $or: [
                        {phone: customerPhone},
                        {email: customerEmail}
                    ]
                })
                if (!customer) return sendError(res, 'customer not found')
                customerId = customer.role._id
            }
            
            const service = await DeliveryService.findOne({name: serviceName })
            if (!service) return sendError(res, 'the service is not exist.')
            var data = await opencage.geocode({q: `${origin}`, key: OPENCAGE_API_KEY})            
            if (data.status.code == 200 && data.results.length > 0) {
                if (! data.results[0].geometry) {
                    return sendError(res, "origin is not found")
                }                       
            }
            data = await opencage.geocode({q: `${destination}`, key: OPENCAGE_API_KEY})            
            if (data.status.code == 200 && data.results.length > 0) {
                if (! data.results[0].geometry) {
                    return sendError(res, "destination is not found")
                }                       
            }
            const orderId = await genarateOrderID()
            var _receiver = null
            _receiver = await Receiver.findOne({identity : identity})
            if (! _receiver){            
                _receiver = await Receiver.create({name, phone, identity})
            }          
            const order = await Order.create({ orderId, service, customer: customerId, receiver:_receiver, origin, destination})            
            return sendSuccess(res, 'create new order successfully', {orderId : order.orderId})
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


/**
 * @route GET /api/order/
 * @description customer get list of their order
 * @access private
 */
orderRoute.get('/',
    verifyToken,
    verifyCustomer,
    async (req, res) => {
        try {            
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const {sortBy, status} = req.query            
            var filterCondition = status ? {status: status} : {}       
            const customerId = req.user.role._id
            const order = await Order.find({ $and: [{customer: customerId}, filterCondition]}).skip(pageSize*page).limit(pageSize).sort(sortBy)
            const length = await Order.count({customer: customerId})
            return sendSuccess(res, 'get order successfully', {length, order})
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
})


/**
 * @route GET /api/order/:orderId
 * @description customer see their order by orderId  
 * @access private
 */
orderRoute.get('/:orderId',
    verifyToken,
    verifyCustomer,
    async (req, res) => {
        try {
            const customerId = req.user.role._id
            const {orderId} = req.params
            const order = await Order.find({orderId: orderId, customer: customerId})
            if (order)
                return sendSuccess(res, 'get order successfully', order)
            return sendError(res, 'no information')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route PUT /api/order/:orderId
 * @description customer can update their order when order status is waiting 
 * @access private
 */
orderRoute.put('/:orderId',
    verifyToken,
    verifyCustomerOrAdmin,
    async (req, res) => {
        try {            
            const userId = req.user.role._id
            const {orderId} = req.params
            var customerId = null   
            var isExistedOrder = null
            //Check whether user is customer or admin         
            const checkUser = await Customer.exists({_id: userId})
            if (checkUser) { //If user is customer
                customerId = userId
                isExistedOrder = {orderId: orderId, customer: customerId}
            }            
            else {            //If user is admin                
                isExistedOrder = {orderId: orderId}
            }
            const order = await Order.findOne(isExistedOrder)
            if (!order) {
                return sendError(res, "Order is not found.")
            }
            else if (order.status !== "waiting"){
                return sendError(res, "Order can't be modified.")
            }
            const {origin, destination, serviceName} = req.body
            const service = serviceName
            if (service) {
                service = await DeliveryService.findOne({name: serviceName })
                if (!service) return sendError(res, 'the service is not exist.')
            }
            var data = null
            if(origin) {
                data = await opencage.geocode({q: `${origin}`, key: OPENCAGE_API_KEY})            
                if (data.status.code == 200 && data.results.length > 0) {
                    if (! data.results[0].geometry) {
                        return sendError(res, "origin is not found")
                    }                       
                }
            }
            if(destination){
                data = await opencage.geocode({q: `${destination}`, key: OPENCAGE_API_KEY})            
                if (data.status.code == 200 && data.results.length > 0) {
                    if (! data.results[0].geometry) {
                        return sendError(res, "destination is not found")
                    }                       
                }
            }
            const updatedOrder = await Order.findOneAndUpdate({orderId: orderId}, {origin, destination, service})
            if (updatedOrder)
                return sendSuccess(res, 'get order successfully', updatedOrder)
            return sendError(res, 'no information')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/order/tracking/:lstOrderId
 * @description get list of order
 * @access public
 */
orderRoute.get('/tracking/:lstOrderId', async (req, res) => {
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

export default orderRoute