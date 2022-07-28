import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import ProductShipment from "../../model/ProductShipment.js"
import Product from "../../model/Product.js"
import { createProductShipmentValidate } from "../../validation/productShipment.js"


const productAdminRoute = express.Router()
/**
 * @route POST /api/admin/product-shipment/create
 * @description create information of product shipment
 * @access private
 */
 productAdminRoute.post('/create', async (req, res) => {

        const { name, quantity, unit, order, product_shipments } = req.body


        await Product.create({ name, quantity, unit, order, product_shipments  })
        return sendSuccess(res, "successful")
  
})

export default productAdminRoute