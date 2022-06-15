import express from "express"
import { sendError } from "../helper/client.js"
import { lookupPostageValidate } from "../validation/lookup.js"

const lookupRoute = express.Router()

/**
 * @route POST /api/look-up/postage
 * @description customer look up a postage
 * @access public
 */
lookupRoute.post('/postage', (req, res) => {
    try {
        const errors = lookupPostageValidate(req.body)
        if (errors) return sendError(res, errors)
        
    } catch (error) {
        
    }
})

export default lookupRoute