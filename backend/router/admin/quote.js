import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import {createLogoDir, verifyAdmin, verifyToken} from "../../middleware/index.js"
import { handleFilePath, upload, uploadResources } from "../../constant.js"
import {createQuoteValidate} from "../../validation/quote.js"
import Quote from "../../model/Quote.js"

const quoteAdminRoute = express.Router()

/**
 * @route POST /api/admin/quote
 * @description create a new quote
 * @access private
 */
quoteAdminRoute.post('/', 
    createLogoDir,
    uploadResources.single('avatar'),   
    async (req, res) => {    
        const error = createQuoteValidate(req.body)
        if (error) return sendError(res, error)
      
        try {
            const avatar = handleFilePath(req.file) 
            const {name, description, quote} = req.body;
            const isExist = await Quote.exists({
                $and: [
                    {name, description}
                ]
            })
            if (isExist) {
                return sendError(res, "This person is existed !")
            }
                            
            await Quote.create({name, avatar: avatar , description, quote});
            return sendSuccess(res, 'create commitment successfully.', {name, description, quote, avatar})
            
        } catch (error) {
            console.log(error)
            if (req.avatar) unlinkSync(req.avatar.path)
            return sendServerError(res)
        }
    }
)

/**
 * @route POST /api/admin/quote
 * @description create a new quote
 * @access private
 */
quoteAdminRoute.post('/', 
    createLogoDir,
    uploadResources.single('avatar'),   
    async (req, res) => {    
        try {
            const avatar = handleFilePath(req.file) 
            const {name, description, quote} = req.body;
            const isExist = await Quote.exists({description})
            if (isExist) {
                return sendError(res, "This person is existed !")
            }
                            
            await Quote.create({name, avatar: avatar , description, quote});
            return sendSuccess(res, 'create commitment successfully.', {name, description, quote, avatar})
            
        } catch (error) {
            console.log(error)
            if (req.avatar) unlinkSync(req.avatar.path)
            return sendServerError(res)
        }
    }
)

/**
 * @route PUT /api/admin/quote/:id
 * @description update content of quote
 * @access private
 */
quoteAdminRoute.put('/:id',
    createLogoDir,
    uploadResources.single('avatar'),
    async (req, res) => {
        try{
            const {id} = req.params
            const isExist = await Quote.exists({_id: id})
            if(! isExist) return sendError(res, "Quote not exists")

            const avatar = handleFilePath(req.file)
            const {name, description, quote} = req.body
            
            await Quote.findByIdAndUpdate(id, {name, description, quote, avatar:avatar})
            .then(() => {return sendSuccess(res, "Update quote successfully", {name, description, quote, avatar})})
            .catch((err) => {return sendError(res, err)})
            
        } catch (error) {
            console.log(error)
            if(req.avatar) unlinkSync(req.avatar.path)
            return sendServerError(res)
        }
    }
)


/**
 * @route DELETE /api/admin/quote/:id
 * @description delete a quote
 * @access private
 */
quoteAdminRoute.delete('/:id',
    async (req, res) => {
        const {id} = req.params;    
        try {
            const isExist = await Quote.exists({_id : id});
            if (!isExist) return sendError(res, "Quote not exist");
            
            await Quote.findByIdAndRemove(id)
                .then((data)=> { return sendSuccess(res, "Delete quote successfully.", data)})  
                .catch((err) => { return sendError(res, err)})  
        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)

export default quoteAdminRoute