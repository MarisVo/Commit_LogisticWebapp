import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import {createLogoDir, verifyAdmin, verifyToken} from "../middleware/index.js"
import { handleFilePath, upload, uploadResources } from "../constant.js"
import Quote from "../model/Quote.js"

const quoteRoute = express.Router()

/**
 * @route GET /api/quote/
 * @description get all quotes 
 * @access public
 */
quoteRoute.get('/',
    async(req, res) => {
        try {
            const quotes = await Quote.find({})
            if (quotes) return sendSuccess(res, "get quote successful.", quotes)
            return sendError(res, "no information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/quote/:id
 * @description get a quote
 * @access public
 */
quoteRoute.get('/:id',
    async(req, res) => {
        try {
            const {id} = req.params
            const quote = await Quote.findById(id)
            if (quote) return sendSuccess(res, "Get quote successful.", quote)
            return sendError(res, "No information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

export default quoteRoute
