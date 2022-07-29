import express from "express"
import Customer from "../model/Customer.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import {CUSTOMER} from "../constant.js"


const customerRoute = express.Router();
/**
 * @route GET /api/customer/
 * @description get all customers, get a customer by id, sort by name and search by keyword
 * @access public
 */
customerRoute.get('/', async (req, res) => {
    const id = req.query.id ? req.query.id : null;
    const keyword = req.query.keyword ? req.query.keyword : null;
    const sort = req.query.sort || 1;
    let query = {};
    if (id) {
        query = {_id: id}
    }
    else if (keyword) {
        query = { $or: [{
            name: {$regex: keyword, $options: '$i'}
        },{
            address: {$regex: keyword, $options:'$i'}
        },{
            description: {$regex: keyword, $options:'$i'}
        },{
            customer_type: {$regex: keyword, $options:'$i'}
        },{
            companyTaxcode_business: {$regex: keyword, $options:'$i'}
        }]}
    }
    try {
        const result = await Customer.find(query).sort({name: sort})
        sendSuccess(res, "Get customers successfully", result)
    }
    catch (err) {
        sendError(res, err);
    }
})
/**
 * @route POST /api/customer/
 * @description Create a new customer
 * @access public
 */
// customerRoute.post('/', async (req, res) => {
//     let {name, address, description, customer_type, rank_passers, companyTaxcode_business, accepted_business} = req.body
//     let customer = new Customer({
//         name: name,
//         address: address,
//         description: description,
//         customer_type: customer_type,
//         rank_passers: rank_passers,
//         companyTaxcode_business: companyTaxcode_business,
//         accepted_business: accepted_business
//     })
//     try {
//         await customer.save()
//         .then(() =>{sendSuccess(res, "Create customer successfully")})
//     }
//     catch (err) {
//         sendError(res, err);
//     }
// })

export default customerRoute