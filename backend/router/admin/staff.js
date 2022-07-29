import express, { request } from "express";
import Staff from "../../model/Staff.js";
import User from "../../model/User.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { STAFF } from "../../constant.js";
const staffAdminRoute = express.Router();

/**
 * @route GET /api/admin/staff/
 * @description get all staff, get a staff by id, sort by name and search by keyword
 * @access private
 */
 staffAdminRoute.get('/', async (req, res) => {
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
            staff_type: {$regex: keyword, $options:'$i'}
        }]}
    } 
    try {
        const result = await Staff.find(query).sort({ name : sort})
        return sendSuccess(res, "Get staffs information successfully",result);
    }
    catch (err) {sendError(res, err.message)}
        
})
/**
 * @route  DELETE /api/admin/staff/:id
 * @description Delete staff by id
 * @access private
 */
staffAdminRoute.delete('/:id', async (req, res) => {
    let id = req.params.id;
    const isExist = await Staff.exists({_id: id})
    if (!isExist) {return sendError(res,'Staff does not exist')}
    try {
<<<<<<< Updated upstream
        const staff = await Staff.deleteOne({_id: id})
        const userfind = await User.find({role: id})
        await User.findByIdAndRemove(userfind[0]._id)
            .then(() => {
                return sendSuccess(res, "Delete staff user successfully.")
            })
=======
        const isExist = await Staff.exists({_id: id})
        if (!isExist) {return sendError(res,'Staff does not exist')}
        const result = await Staff.deleteOne({_id: id})
        sendSuccess(res, "Staff deleted successfully");
>>>>>>> Stashed changes
    }
    catch (err) {sendError(res, err.message)};
})
/**
 * @route  PUT /api/admin/staff/:id
 * @description Update the staff by id using request body.
 * @access private
 */
 staffAdminRoute.put('/:id', async (req, res) => {
    let id = req.params.id;
    const {name, staff_type} = req.body;
    const isExist = await Staff.exists({_id: id})
    if (!isExist) {return sendError(res,'Staff does not exist')}
<<<<<<< Updated upstream
=======
    if (staff_type === '') {
        return sendError(res, "Staff-type not found")
    }
>>>>>>> Stashed changes
    if (!((staff_type == STAFF.ADMIN || staff_type == STAFF.DRIVER || staff_type == STAFF.SHIPPER || staff_type == STAFF.STOREKEEPER || staff_type == STAFF.STAFF))) {
        return sendError(res, "Staff-type not found")
    }

    try {
        const result = await Staff.findByIdAndUpdate(id, {name: name, staff_type})
        return sendSuccess(res, "Staff updated successfully")
    }
    catch (err) {
        sendError(res, err.message)
    }

})
//!----------------------------------------------------------------
// staffAdminRoute.post('/create/:name/:staffType/', async (req, res) => {
//     let {name, staffType} = req.params;
//     let staff = new Staff({
//         name: name,
//         staff_type: staffType,
//     })
//     staff.save()
//     .then((result) => {
//         res.send("staff created successfully")
//     })
//     .catch((err) => {
//         res.send(err.keyValue.identity);
//     })
// })
export default staffAdminRoute;
