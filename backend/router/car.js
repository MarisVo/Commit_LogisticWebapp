import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Car from "../model/Car.js"
import { createCarValidate } from "../validation/car.js"

const carRoute = express.Router()

/**
 * @route GET /api/car
 * @description get car information
 * @access public
 */
 carRoute.get('/',
 async (req, res) => {
     const {limit} = req.query
     try {
         const cars = await Car.find({}).limit(limit).sort('-updatedAt')
         if ( cars ) return sendSuccess(res, "Get car successful.", cars)
         return sendError(res, "Not information found.")
     } catch(error){
         console.log(error)
         return sendServerError(res)
     }
})

/**
 * @route GET /api/user/:id
 * @description get about information by id
 * @access public
 */
 carRoute.get('/:id',
    async (req, res) => {
        try {
            const {id} = req.params
            const cars = await Car.findById(id)
            if ( cars ) return sendSuccess(res, "Get user successful.", cars)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    })


export default carRoute