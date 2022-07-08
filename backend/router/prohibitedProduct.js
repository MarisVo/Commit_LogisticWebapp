import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import ProhibitedProduct from "../model/ProhibitedProduct.js"

const prohibitedProductRoute = express.Router()

/**
 * @route GET /api/prohibited-product
 * @description get all prohibited product
 * @access public
 */
 prohibitedProductRoute.get('/',
    async(req, res) => {
        const {limit} = req.query
        try {
            const prohibitedProduct = await ProhibitedProduct.find({}).limit(limit).sort('-updatedAt')
            if (prohibitedProduct) 
                return sendSuccess(res, "Get prohibited product successful.", prohibitedProduct)
            
                return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/prohibited-product/:id
 * @description get a prohibited product by id
 * @access public
 */
 prohibitedProductRoute.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const prohibitedProduct = await ProhibitedProduct.findById(id)
        if (prohibitedProduct)
            return sendSuccess(res, 'get information of prohibited product successfully.', prohibitedProduct)
        return sendError(res, 'information of prohibited product  is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})



export default prohibitedProductRoute