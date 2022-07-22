import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import ProductShipment from "../../model/ProductShipment.js"
import { createProductShipmentValidate } from "../../validation/productShipment.js"


const productShipmentAdminRoute = express.Router()

/**
 * @route POST /api/admin/product-shipment/create
 * @description create information of product shipment
 * @access private
 */
 productShipmentAdminRoute.post('/create', async(req, res) => {
    const errors = createProductShipmentValidate(req.body)
    if (errors)
        return sendError(res, errors)

    try {
        const {quantity } = req.body
        ProductShipment.create({quantity })
        return sendSuccess(res, 'set product shipment information successfully.')
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route DELETE /api/admin/product-shipment/:id
 * @description delete a product shipment existing 
 * @access private
 */
 productShipmentAdminRoute.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const isExit = await ProductShipment.exists({_id: id})
        if(!isExit)
            return sendError(res, "Product shipment not exists")
        
        await ProductShipment.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete product shipment successfully.")
            })
            .catch((err) => {
                return sendError(res, err)
            })
    }
    catch(error) {
        console.log(error)
        return sendError(res)
    }
})

/**
 * @route PUT /api/admin/product-shipment/:id
 * @description update information of product shipment
 * @access private
 */
 productShipmentAdminRoute.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {quantity } = req.body
        if (!quantity) return sendError(res, "Quantity is required")
        const isExist = await ProductShipment.exists({quantity: quantity})
        if (isExist) 
            return sendError(res, "This quantity is existed.")
        await ProductShipment.findByIdAndUpdate(id, {quantity: quantity})
        return sendSuccess(res, "Update  successfully", {quantity})
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }             
})

export default productShipmentAdminRoute