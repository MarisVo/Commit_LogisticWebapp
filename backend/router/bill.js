import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Bill from "../model/Bill.js"


const billRoute = express.Router()

/**
 * @route GET /api/bill
 * @description get about information of bill
 * @access public
 */
 billRoute.get('/',
    async (req, res) => {
        const {limit} = req.query
        try {
            const bills = await Bill.find({}).limit(limit).sort('-updatedAt')
            if (bills) return sendSuccess(res, "Get product shipment successful.", bills)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route GET /api/bill/:id
 * @description get about information of bill by id
 * @access public
 */
billRoute.get('/:id',
    async (req, res) => {
        try {
            const {id} = req.params
            const bills = await Bill.findById(id)
            if ( bills ) return sendSuccess(res, "Get product shipment successful.", bills)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })

export default billRoute