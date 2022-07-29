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
customerRoute.post('/', async (req, res) => {
    let {name, address, description, customer_type, rank_passers, companyTaxcode_business, accepted_business} = req.body
    let customer = new Customer({
        name: name,
        address: address,
        description: description,
        customer_type: customer_type,
        rank_passers: rank_passers,
        companyTaxcode_business: companyTaxcode_business,
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
/**
 * @route PUT /api/customer/:id
 * @description Update a customer
 * @access public
 */
customerRoute.put('/:id', async (req, res) => {
    let id = req.params.id;
    const isExist = await Customer.exists({_id: id})
    if (!isExist) {return sendError(res,'Customer does not exist')}
    const {name, address, description, customer_type, rank_passers, companyTaxcode_business, accepted_business} = req.body;
    if (customer_type == '') {return sendError(res,'Invalid customer_type')}
    else if (customer_type && !(customer_type == CUSTOMER.BUSINESS || customer_type == CUSTOMER.PASSERS || customer_type == CUSTOMER.INTERMEDIARY)) {
        return sendError(res,'Invalid customer_type')
    }
    try {
        await Customer.findByIdAndUpdate(id, {name: name, address: address, description: description, customer_type: customer_type, rank_passers: rank_passers, companyTaxcode_business: companyTaxcode_business, accepted_business: accepted_business})
        .then(() => {sendSuccess(res, 'Customer updated successfully')})
    }
    catch (err) {
        sendError(res, err);
    }
})
/**
 * @route DELETE /api/customer/:id
 * @description delete a customer
 * @access public
 */
customerRoute.delete('/:id', async (req, res) => {
    let id = req.params.id;
    const isExist = await Customer.exists({_id: id})
    if (!isExist) {return sendError(res,'Customer does not exist')}

    try {
        await Customer.findByIdAndRemove(id)
        .then(() => {sendSuccess(res,"Delete Customer successfully")})
    }
    catch (err) {
        sendError(res, err)
    }
})
export default customerRoute