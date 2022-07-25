import express from "express";
import Receiver from "../../model/Receiver.js";
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"

const receiverRoute = express.Router();

//! get all receivers---------
receiverRoute.get('/', async (req, res) => {
    Receiver.find({})
    .then((result) => {
        res.send({
            message: 'ok',
            data: result
        })
    })
    .catch((err) => {
        res.send(err)
    })
})
//! get receivers by id--------------
receiverRoute.get('/:id', async (req, res) => {
    let id = req.params.id;
    Receiver.find({ _id: id })
    .then((result) => {
        res.send({ message: 'ok', data: result })
    })
    .catch((err) => {res.send(err)});
})

//! Search receivers by keyword --------------
receiverRoute.put('/search', async (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword);
    Receiver.find({ $or: [{
        name: {$regex: keyword, $options: '$i'}
    },{
        phone: {$regex: keyword, $options:'$i'}
    },{
        identity: {$regex: keyword, $options: '$i'}
    }]})
    .then ((result) => {
        res.send({ keyword: keyword, data: result })
    })
    .catch((err) => {res.send(err)});
})
//! Sort receiver : type 1: ascending type -1: descending
receiverRoute.get('/sort/:type', (req, res) => {
    let type = req.params.type || 1
    Receiver.find({}).sort({ name : type})
    .then((result) => {
        res.send({ message: 'ok', data: result })
    })
    .catch((err) => {res.send(err)});
})
//! Delete receiver
receiverRoute.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Receiver.deleteOne({_id: id}).then((result) => {
        res.send({ message: "Receiver deleted" })
    }).catch((err) => {res.send(err)});
})



//! Create receiver
receiverRoute.post('/create/:name/:phone/:identity', async (req, res) => {
    let {name, phone, identity} = req.params;
    let receiver = new Receiver({
        name: name,
        phone: phone,
        identity: identity
    })
    receiver.save()
    .then((result) => {
        res.send("receiver created successfully")
    })
    .catch((err) => {
        res.send(err)
    })
})
//! Update the receiver
receiverRoute.put('/update', async (req, res) => {
    let id = req.query.id;
    let name = req.query.name ? req.query.name : null;
    let phone = req.query.phone ? req.query.phone : null;
    let identity = req.query.identity ? req.query.identity : null;
    
    if (name) {
        Receiver.findByIdAndUpdate(id, {name: name}).then((result) => {res.send("receiver updated successfully")})
        .catch((err) => {res.send(err)});
    }
    if (phone) {
        Receiver.findByIdAndUpdate(id, {phone: phone}).then((result) => {res.send("receiver updated successfully")})
        .catch((err) => {res.send(err)});
    }
    if (identity) {
        Receiver.findByIdAndUpdate(id, {identity: identity}).then((result) => {res.send("receiver updated successfully")})
        .catch((err) => {res.send(err)});
    }
})




export default receiverRoute;
