import express from "express"
import Partner from "../model/Partner.js"
import {createAssetsDir, verifyAdmin, verifyToken} from "../middleware/index.js"
import {handleFilePath, upload, uploadResources } from "../constant.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { unlinkSync } from "fs"

const partnerRoute = express.Router()

/**
 * @route GET /api/partner/
 * @description get all logo partner 
 * @access public
 */
partnerRoute.get('/',
    async(req, res) => {
        try {
            const partners = await Partner.find({})
            if (partners) return sendSuccess(res, "Get partner successful.", partners)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/partner/:id
 * @description get logo partner by id
 * @access public
 */
partnerRoute.get('/:id',
    async(req, res) => {
        try {
            const {id} = req.params
            const partner = await Partner.findById(id)
            if (partner) return sendSuccess(res, "get partner successful.", partner)
            return sendError(res, "not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/partner/count/:num
 * @description get "num" number of latest partners
 * @access public
 */
partnerRoute.get('/count/:num',
    async(req, res) => {
        try {
            const {num} = req.params
            const partners = await Partner.find({}).limit(num).sort('-updatedAt')
            if (partners) return sendSuccess(res, "get partner successful.", partners)
            return sendError(res, "not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)


export default partnerRoute