import express from "express"
import Customer from "../model/Customer.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import {CUSTOMER} from "../constant.js"


const customerRoute = express.Router();

customerRoute.get('/', async (req, res) => {
    let id = req.query.id ? req.query.id : null;
    let keyword = req.query.keyword ? req.query.keyword : null;
    let sort = req.query.sort || 1;
    let query = {}
    if (id) {query = {id: id}}
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
            rank_passers: {$regex: keyword, $options:'$i'}
        },{
            companyTaxcode_business: {$regex: keyword, $options:'$i'}
        },{
            accepted_business: {$regex: keyword, $options:'$i'}
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

customerRoute.post('/', async (req, res) => {
    let {name, address, description, customer_type, rank_passers, taxcode_business, accepted_business} = req.body
    let customer = new Customer({
        name: name,
        address: address,
        description: description,
        customer_type: customer_type,
        rank_passers: rank_passers,
        companyTaxcode_business: taxcode_business,
        accepted_business: accepted_business
    })
    try {
        await customer.save()
        .then(() =>{sendSuccess(res, "Create customer successfully")})
    }
    catch (err) {
        sendError(res, err);
    }
})


export default customerRoute