import express from "express";
import Receiver from "../../model/Receiver.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const receiverAdminRoute = express.Router();

/**
 * @route GET /api/admin/receiver/:method
 * @description get all receivers, get a receiver by id, sort by name and search by keyword
 * @access private
 */

receiverAdminRoute.get('/', async (req, res) => {
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
            phone: {$regex: keyword, $options:'$i'}
        },{
            identity: {$regex: keyword, $options: '$i'}
        }]}
    }
    try {
        const result = await Receiver.find(query).sort({ name : sort});
        return sendSuccess(res, "ok", result);
    }
    catch (err) {
        return sendError(res, err.message)
    }
})

/**
 * @route  DELETE /api/admin/receiver/:id
 * @description Delete receiver by id
 * @access private
 */


receiverAdminRoute.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Receiver.deleteOne({_id: id})
        return sendSuccess(res,"Receiver deleted successfully");
    }
    catch(error) {
        return sendError(res, error.message);
    }
})
/**
 * @route  PUT /api/admin/receiver/:id
 * @description Update the receiver by id using request body.
 * @access private
 */

receiverAdminRoute.put('/:id', async (req, res) => {
    let id = req.params.id;
    const {name, phone, identity} = req.body;            
    try {
        const result = await Receiver.findByIdAndUpdate(id, {name: name, phone: phone, identity: identity});
        return sendSuccess(res,"Receiver updated successfully");
    }
    catch (err) {
        if (err.codeName == "DuplicateKey") {
            sendError(res, (err.keyValue.identity + " identity value is existed") )
        } else {
            sendError(res, err.message)
        }
    }
});

// //! Create receiver
// receiverAdminRoute.post('/create/:name/:phone/:identity', async (req, res) => {
//     let {name, phone, identity} = req.params;
//     let receiver = new Receiver({
//         name: name,
//         phone: phone,
//         identity: identity
//     })
//     receiver.save()
//     .then((result) => {
//         res.send("receiver created successfully")
//     })
//     .catch((err) => {
//         res.send(err.keyValue.identity);
//     })
// })



export default receiverAdminRoute;
