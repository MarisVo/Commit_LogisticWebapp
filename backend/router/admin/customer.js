import express from "express"
import Customer from "../../model/Customer.js"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import {CUSTOMER} from "../../constant.js"

/**
 * @route PUT /api/customer/:id
 * @description Update a customer
 * @access public
 */
const customerAdminRoute = express.Router();

customerAdminRoute.put('/:id', async (req, res) => {
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
        .then(() => {return sendSuccess(res, 'Customer updated successfully')})
    }
    catch (err) {
        return sendError(res, err);
    }
})
/**
 * @route DELETE /api/customer/:id
 * @description delete a customer
 * @access public
 */
 customerAdminRoute.delete('/:id', async (req, res) => {
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
export default customerAdminRoute;