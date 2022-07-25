import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Road from "../model/Road.js"
import { createRoadValidate } from "../validation/road.js"

const roadRoute = express.Router()

/**
 * @route GET /api/road
 * @description get about information
 * @access public
 */
 roadRoute.get('/',
    async (req, res) => {
        const {limit} = req.query
        try {
            const roads = await Road.find({}).limit(limit).sort('-updatedAt')
            if ( roads ) return sendSuccess(res, "Get road successful.", roads)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })


/**
 * @route GET /api/road/:id
 * @description get about information by id
 * @access public
 */
 roadRoute.get('/:id',
     async (req, res) => {
         try {
             const {id} = req.params
             const roads = await Road.findById(id)
             if ( roads ) return sendSuccess(res, "Get user successful.", roads)
             return sendError(res, "Not information found.")
         } catch(error){
             console.log(error)
             return sendServerError(res)
         }
     })
    

export default roadRoute