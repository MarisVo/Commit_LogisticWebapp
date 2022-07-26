import express from "express";
import Receiver from "../../model/Receiver.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const receiverAdminRoute = express.Router();

/**
 * @route GET /api/admin/receiver/:method
 * @description get all receivers, get a receiver by id, sort by name and search by keyword
 * @access private
 */

receiverAdminRoute.get('/:method', async (req, res) => {
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
            phone: {$regex: keyword, $options:'$i'}
        },{
            identity: {$regex: keyword, $options: '$i'}
        }]}
    } 
    if (method === 'sort') {
        Receiver.find({}).sort({ name : sort})
        .then((result) => {
            sendSuccess(res, "ok", result);
        })
        .catch((err) => {sendError(res, err.message);});
    } else {
        Receiver.find(query)
        .then((result) => {
            sendSuccess(res, "ok", result);
        })
        .catch((err) => {
            sendError(res, err.message);
        })
    }
    
})

/**
 * @route  DELETE /api/admin/receiver/delete/:id
 * @description Delete receiver by id
 * @access private
 */


receiverAdminRoute.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Receiver.deleteOne({_id: id}).then((result) => {
        sendSuccess(res, "ok", result);
    }).catch((err) => {sendError(res, err.message)});
})
/**
 * @route  PUT /api/admin/receiver/update?id={id}
 * @description Update the receiver by id using request body.
 * @access private
 */

receiverAdminRoute.put('/update', async (req, res) => {
    let id = req.query.id;
    const {name, phone, identity} = req.body;            
    Receiver.findByIdAndUpdate(id, {name: name, phone: phone, identity: identity}).then((result) => {sendSuccess(res,"receiver updated successfully")})
    .catch((err) => {sendError(res,err.message)});
})

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
//         res.send(err)
//     })
// })



export default receiverAdminRoute;
