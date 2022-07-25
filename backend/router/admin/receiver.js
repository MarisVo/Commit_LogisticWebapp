import express from "express";
import Receiver from "../../model/Receiver.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const receiverAdminRoute = express.Router();

/**
 * @route GET /api/admin/receiver/all
 * @description get all receivers
 * @access private
 */

receiverAdminRoute.get('/all', async (req, res) => {
    Receiver.find({})
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {
        sendError(res, err.message);
    })
})
/**
 * @route GET /api/admin/receiver/:id
 * @description get receiver by id
 * @access private
 */

receiverAdminRoute.get('/get-by-id/:id', async (req, res) => {
    let id = req.params.id;
    Receiver.find({ _id: id })
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {
        sendError(res, err.message);
    });
})
/**
 * @route GET /api/admin/receiver/search?keyword={keyword}
 * @description Search receivers by keyword
 * @access private
 */

receiverAdminRoute.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
    Receiver.find({ $or: [{
        name: {$regex: keyword, $options: '$i'}
    },{
        phone: {$regex: keyword, $options:'$i'}
    },{
        identity: {$regex: keyword, $options: '$i'}
    }]})
    .then ((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {sendError(res, err.message);});
})
/**
 * @route GET /api/admin/receiver/sort/:type
 * @description Sort receiver, type 1: ascending type -1: descending
 * @access private
 */

receiverAdminRoute.get('/sort/:type', (req, res) => {
    let type = req.params.type == undefined ? 1 : req.params.type
    Receiver.find({}).sort({ name : type})
    .then((result) => {
        sendSuccess(res, "ok", result);
    })
    .catch((err) => {sendError(res, err.message);});
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
