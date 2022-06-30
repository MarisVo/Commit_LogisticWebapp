import express from "express"
import { sendError, sendServerError,sendAutoMail, sendSuccess } from "../../helper/client.js"
import { createMessageValidate} from "../../validation/message.js"
import Message from "../../model/Message.js"

const contactMsgAdminRoute = express.Router()

/**
 * @route GET /api/message
 * @description Get list of message (all or paging)
 * @access private
 */
contactMsgAdminRoute.get('/', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const messages = await Message.find({}).limit(pageSize).skip(pageSize*page)
        if (messages)
            return sendSuccess(res, 'get message information successfully.', messages)
        return sendError(res, 'message information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/message/:messageId
 * @description get a message by id
 * @access 
 */
contactMsgAdminRoute.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const message = await Message.findById(id)
        if (message)
            return sendSuccess(res, 'get message information successfully.', message)
        return sendError(res, 'message information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/message/:id
 * @description update information of a message
 * @access private
 */
contactMsgAdminRoute.put('/:id',
    async (req, res) => {
        try{
            const {id} = req.params
            const {name, email, phone, message} = req.body            
            const isExist = await Message.exists({_id: id})
            if (! isExist) return sendError(res, "This message is not existed.")
            await Message.findByIdAndUpdate(id, {name, email, phone, message})
            return sendSuccess(res, "Update message successfully",  {name, email, phone, message})            
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }             
    }
)

/**
 * @route DELETE /api/admin/message/:id
 * @description delete a existing message
 * @access private
 */
contactMsgAdminRoute.delete('/:id',
    async (req, res) => {
        try {
            const {id} = req.params;    
            const isExist = await Message.exists({_id: id})
            if (!isExist) return sendError(res, "Message not exists.")            
            await Message.findByIdAndRemove(id)
            return sendSuccess(res, "Delete message successfully.") 
        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)

export default contactMsgAdminRoute