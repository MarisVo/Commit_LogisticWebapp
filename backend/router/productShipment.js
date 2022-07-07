import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import productShipment from "../model/ProductShipment.js"
import { createProductShipmentValidate } from "../validation/productShipment.js"


const productShipmentRoute = express.Router()


/**
 * @route GET /api/product-shipment
 * @description get about information of product shipment
 * @access public
 */
 productShipmentRoute.get('/',
    async (req, res) => {
        const {limit} = req.query
        try {
            const productShipments = await productShipment.find({}).limit(limit).sort('-updatedAt')
            if (productShipments) return sendSuccess(res, "Get product shipment successful.", productShipments)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })

    /**
 * @route GET /api/product-shipment/:id
 * @description get about information of product shipment by id
 * @access public
 */
productShipmentRoute.get('/:id',
    async (req, res) => {
        try {
            const {id} = req.params
            const productShipments = await productShipment.findById(id)
            if ( productShipments ) return sendSuccess(res, "Get product shipment successful.", productShipments)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })



export default productShipmentRoute