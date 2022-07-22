import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import ProductShipment from "../model/ProductShipment.js"
import { createProductShipmentValidate } from "../validation/productShipment.js"


const productShipmentRoute = express.Router()


/**
 * @route GET /api/product-shipment
 * @description get about information of product shipment
 * @access public
 */
 productShipmentRoute.get('/',
    async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword, sortBy, email, phone } = req.query
        console.log(keyword, sortBy, email, phone)

        var query = {}

        if (email)
            query.email = email
        if (phone)
            query.phone = phone

        // const userList = await User.find({
        //     $or: [
        //         query,
        //         {
        //             $or: [
        //                 { email: { $regex: `${keyword}`, $options: 'i' }},
        //                 { phone: { $regex: `${keyword}`, $options: 'i' }}
        //             ]
        //         }
        //     ]
        // }).limit(pageSize).skip(pageSize * page).sort(`-${sortBy}`)
        const userList = await User.find(query)
        .limit(pageSize)
        .skip(pageSize * page)
        .sort(`-${sortBy}`)

        if (userList)
            return sendSuccess(res, "Get user information successfully", userList);

        return sendError(res, "User not found")

    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}
)

    /**
 * @route GET /api/product-shipment/:id
 * @description get about information of product shipment by id
 * @access public
 */
productShipmentRoute.get('/:id',
    async (req, res) => {
        try {
            const {id} = req.params
            const productShipments = await ProductShipment.findById(id)
            if ( productShipments ) return sendSuccess(res, "Get product shipment successful.", productShipments)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })



export default productShipmentRoute