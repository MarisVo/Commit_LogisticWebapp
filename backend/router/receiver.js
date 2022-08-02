import express from "express";
import Receiver from "../model/Receiver.js";
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { verifyToken, verifyCustomer} from '../middleware/index.js'
import Order from "../model/Order.js"
import { ORDER_STATUS } from "../constant.js";

const receiverRoute = express.Router();


receiverRoute.put('/:id',
    // verifyToken, 
    // verifyCustomer,
    async (req, res) => {
        const id = req.params.id
        const {name, phone, identity} = req.body
        const order = await Order.find({_id: id})
        if (!order) {return sendError(res, 'Order not found')}
        if (order[0].status === ORDER_STATUS.waiting) {
            try {
                const receiverId = order[0].receiver
                await Receiver.findByIdAndUpdate(receiverId, {name: name, phone: phone, identity: identity});
                return sendSuccess(res,"Receiver updated successfully");
            }
            catch (err) {
                sendServerError(res);
            }
        } else {
            sendError(res, "Cannot update receiver while order is completed");
        }

    })
export default receiverRoute;