import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Career from "../model/Career.js"

const careerRoute = express.Router()

/**
 * @route GET /api/career
 * @description get career information
 * @access public
 */
careerRoute.get('/',
    async (req, res) => {
        try {
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const career = await Career.find({}).limit(pageSize).skip(pageSize*page)
            if (career)
                return sendSuccess(res, 'get career information successfully.', career)
            return sendError(res, 'career information is not found.')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })





export default careerRoute





