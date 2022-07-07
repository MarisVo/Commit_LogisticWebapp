import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import Road from "../../model/Road.js"
import { createRoadValidate } from "../../validation/road.js"

const roadAdminRoute = express.Router()

/**
 * @route POST /api/admin/create/road
 * @description create information of road
 * @access private
 */
 roadAdminRoute.post('/create', async(req, res) => {
    const errors = createRoadValidate(req.body)
    if (errors)
        return sendError(res, errors)
    
    try {
        const { car, destination, driver, origin, distance, bill } = req.body
        const isExist = await Road.exists({ driver })
        if (isExist) 
            return sendError(res, 'Driver is during working hours.')
        else await Road.create({ car, destination, driver, origin, distance, bill })
            return sendSuccess(res, 'Set road information successfully.')
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route DELETE /api/admin/road/:id
 * @description delete a road existing 
 * @access private
 */
 roadAdminRoute.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const isExit = await Road.exists({_id: id})
        if(!isExit)
            return sendError(res, "Road not exists")
        
        await Road.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete road successfully.")
            })
            .catch((err) => {
                return sendError(res, err)
            })
    }
    catch(error) {
        console.log(error)
        return sendError(res)
    }
})

/**
 * @route PUT /api/admin/road/:id
 * @description update information of road
 * @access private
 */
 roadAdminRoute.put('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const {origin} = req.body
        const {destination} = req.body   
        const {distance} = req.body 
        const {car} = req.body   
        const {driver} = req.body   
        const {bill} = req.body            
        
        if (!destination) return sendError(res, "Destination is required")
        if (!driver) return sendError(res, "Driver is required")
        
        const isExist = await Road.exists({destination: destination})
        if (!isExist) 
           return sendError(res, "This road is not existed.")
        await Road.findByIdAndUpdate(id, {origin: origin, destination: destination,
                                        distance: distance, car: car,
                                        driver: driver, bill: bill})
        return sendSuccess(res, "Update information account successfully", {origin, destination, driver})
        
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }             
})

export default roadAdminRoute