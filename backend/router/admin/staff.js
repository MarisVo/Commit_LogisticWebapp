import express from "express";
import Staff from "../../model/Staff.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const staffAdminRoute = express.Router();

/**
 * @route GET /api/admin/staff/:method
 * @description get all staff, get a staff by id, sort by name and search by keyword
 * @access private
 */

 staffAdminRoute.get('/:method', async (req, res) => {
    const method = req.params.method || 'get';
    const id = req.query.id ? req.query.id : null;
    const keyword = req.query.keyword ? req.query.keyword : null;
    const sort = req.query.sort || 1;
    let query;
    if (method === 'get') {
        query = {};
        if (id) {
            query = {_id: id}
        }
    }
    else if (method === 'search') {
        query = { $or: [{
            name: {$regex: keyword, $options: '$i'}
        },{
            staff_type: {$regex: keyword, $options:'$i'}
        }]}
    } 
    if (method === 'sort') {
        Staff.find({}).sort({ name : sort})
        .then((result) => {
            sendSuccess(res, "ok", result);
        })
        .catch((err) => {sendError(res, err.message);});
    } else {
        Staff.find(query)
        .then((result) => {
            sendSuccess(res, "ok", result);
        })
        .catch((err) => {
            sendError(res, err.message);
        })
    }
    
})

/**
 * @route  POST /api/admin/staff/create/:name/:staffType
 * @description Update the staff by id using request body.
 * @access private
 */

staffAdminRoute.post('/create/:name/:staffType', async (req, res) => {
    let {name, staffType} = req.params;
    let staff = new Staff({
        name: name,
        staff_type: staffType,
    })
    staff.save()
    .then((result) => {
        sendSuccess(res,"Staff updated successfully",result)
    })
    .catch((err) => {
        sendError(res,err.message)
    })
})
/**
 * @route  DELETE /api/admin/staff/delete/:id
 * @description Delete staff by id
 * @access private
 */


staffAdminRoute.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Staff.deleteOne({_id: id}).then((result) => {
        sendSuccess(res, "Staff deleted successfully", result);
    }).catch((err) => {sendError(res, err.message)});
})
/**
 * @route  PUT /api/admin/staff/update?id={id}
 * @description Update the staff by id using request body.
 * @access private
 */

 staffAdminRoute.put('/update', async (req, res) => {
    let id = req.query.id;
    const {name, staff_type} = req.body;            
    Staff.findByIdAndUpdate(id, {name: name, staff_type}).then((result) => {sendSuccess(res,"Staff updated successfully")})
    .catch((err) => {sendError(res,err.message)});
})




export default staffAdminRoute;
