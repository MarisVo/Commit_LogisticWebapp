import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import Car from "../../model/Car.js"
import { createCarValidate } from "../../validation/car.js"

const carAdminRoute = express.Router()

/**
 * @route POST /api/admin/car
 * @description create about information of car
 * @access private
 */
 carAdminRoute.post('/create', async(req, res) => {
    const errors = createCarValidate(req.body)
    if (errors)
        return sendError(res, errors)

    try {
        const {plate, car_type, volumn, tonnage } = req.body
        const isExist = await Car.exists({ plate })
        if (isExist) 
            return sendError(res, "This car plate is already existed.")
        else await Car.create({plate, car_type, volumn, tonnage })
        return sendSuccess(res, 'set car information successfully.')
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route DELETE /api/admin/car/:id
 * @description delete a car existing 
 * @access private
 */
 carAdminRoute.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const isExit = await Car.exists({_id: id})
        if(!isExit)
            return sendError(res, "Car not exists")
        
        await Car.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete car successfully.")
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

export default carAdminRoute