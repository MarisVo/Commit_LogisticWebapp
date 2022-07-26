import express from "express";
import Staff from "../../model/Staff.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const staffAdminRoute = express.Router();

/**
 * @route GET /api/admin/staff/all
 * @description get all staffs
 * @access private
 */

staffAdminRoute.get('/all', async (req, res) => {
    Staff.find({})
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {
        sendError(res, err.message);
    })
})
/**
 * @route GET /api/admin/staff/get-by-id
 * @description get staff by id
 * @access private
 */

staffAdminRoute.get('/get-by-id/:id', async (req, res) => {
    let id = req.params.id;
    Staff.find({ _id: id })
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {
        sendError(res, err.message);
    });
})
/**
 * @route GET /api/admin/staff/search?keyword={keyword}
 * @description Search staffs by keyword
 * @access private
 */

staffAdminRoute.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
    Staff.find({ $or: [{
        name: {$regex: keyword, $options: '$i'}
    },{
        staff_type: {$regex: keyword, $options:'$i'}
    }]})
    .then ((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {sendError(res, err.message);});
})
/**
 * @route GET /api/admin/staff/sort/:type
 * @description Sort staffs, type 1: ascending type -1: descending
 * @access private
 */

staffAdminRoute.get('/sort/:type', (req, res) => {
    let type = req.params.type == undefined ? 1 : req.params.type
    Staff.find({}).sort({ name : type})
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {sendError(res, err.message);});
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
