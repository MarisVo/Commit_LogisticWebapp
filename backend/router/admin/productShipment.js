import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import ProductShipment from "../../model/ProductShipment.js"
import Product from "../../model/Product.js"
import User from "../../model/User.js";
import { createProductShipmentValidate } from "../../validation/productShipment.js"


const productShipmentAdminRoute = express.Router()

/**
 * @route GET /api/admin/product-shipment
 * @description get about information of product shipment
 * @access private
 */
productShipmentAdminRoute.get('/',
    async (req, res) => {
        try {
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const { keyword, sortBy, limit, product_id } = req.query
            console.log(product_id)

            var query = {};
            var keywordList = keyword
                ? {
                    $or: [
                        { product_id: { $regex: keyword, $options: "i" } },
                    ],
                }
                : {};

            if (product_id) {
                query.product_id = product_id;
            }

            const listProductShipment = await ProductShipment.find({ $and: [query, keywordList] })
                .limit(pageSize)
                .skip(pageSize * page)
                .sort(`${sortBy}`)

            if (listProductShipment)
                return sendSuccess(res, "Get product shipment information successfully", listProductShipment);

            return sendError(res, "Product shipment not found")

        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
* @route GET /api/admin/product-shipment/:id
* @description get about information of product shipment by id
* @access private
*/
productShipmentAdminRoute.get('/:id',
    async (req, res) => {
        try {
            const { id } = req.params
            const productShipments = await ProductShipment.findById(id)
            if (productShipments) return sendSuccess(res, "Get product shipment successful.", productShipments)
            return sendError(res, "Not information found.")
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


/**
 * @route POST /api/admin/product-shipment/create
 * @description create information of product shipment
 * @access private
 */
productShipmentAdminRoute.post('/create', async (req, res) => {
    const errors = createProductShipmentValidate(req.body)
    if (errors)
        return sendError(res, errors)

    try {
        const { quantity, product_id } = req.body
        if (quantity < 1)
         return sendError(res, "Quantity is not less than 1")
        const isExist = await ProductShipment.exists({ product_id })
        if (!isExist)
            return sendError(res, "Product is not exists")

        //get quantity of product
        const productid = await Product.findById({ _id: product_id }, { quantity: true })
        const productQuantity = productid.quantity
        console.log(productQuantity)

        //get all product by productID in productshipment
        const productShipmentQuantity = await ProductShipment.find({ product_id: product_id })
        let temp = 0
        for (let i = 0; i < productShipmentQuantity.length; i++) {
            temp = temp + productShipmentQuantity[i].quantity
        }
        let quantityPresent = Number(quantity) + temp
        console.log(quantityPresent)
        // Compare
        if (productQuantity >= quantityPresent) {
            await ProductShipment.create({ quantity, product_id })
            //update product
            const productShipmentQuantity = await ProductShipment.find({ product_id: product_id })
            //traverse id productshipment
            const product_shipments = [];
            for (let i = 0; i < productShipmentQuantity.length; i++) {
                product_shipments.push(productShipmentQuantity[i]._id);
            }
            console.log(product_shipments)
            const updateProduct = await Product.findByIdAndUpdate({_id: product_id}, {product_shipments: product_shipments})
            if (!updateProduct)
                return sendServerError(res, "Update failed")
            return sendSuccess(res, 'Set product shipment information successfully')
        }
        else
            return sendError(res, "Product_shipment quantity over load current product quantity. Current product quantity: " + productQuantity)
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route DELETE /api/admin/product-shipment/:id
 * @description delete a product shipment existing 
 * @access private
 */
productShipmentAdminRoute.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const isExit = await ProductShipment.exists({ _id: id })
        if (!isExit)
            return sendError(res, "Product shipment not exists")

        await ProductShipment.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete product shipment successfully.")
            })
            .catch((err) => {
                return sendError(res, err)
            })
    }
    catch (error) {
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
    try {
        const { id } = req.params;
        const { quantity } = req.body
        if (!quantity) return sendError(res, "Quantity is required")
        const isExist = await ProductShipment.exists({ quantity: quantity })
        if (isExist)
            return sendError(res, "This quantity is existed.")
        await ProductShipment.findByIdAndUpdate(id, { quantity: quantity })
        return sendSuccess(res, "Update  successfully", { quantity })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default productShipmentAdminRoute