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
        try {
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const { limit, sortBy, keyword } = req.query
            console.log(limit, sortBy, keyword)

            var listKeyword = keyword ? {
                $or: [
                    { plate: { $regex: keyword, $options: 'i' } },
                    { car_type: { $regex: keyword, $options: 'i' } },
                    // { volumn: { $regex: keyword, $options: 'i' } },
                ]
            } : {}
            const listCar = await Car.find(listKeyword)
            .limit(pageSize)
            .skip(pageSize*page)
            .sort(`${sortBy}`)
            
            if (listCar) return sendSuccess(res, "Get car successful.", listCar)
            return sendError(res, "Information not found.")
        } catch (error) {
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
            const { id } = req.params
            const cars = await Car.findById(id)
            if (cars) return sendSuccess(res, "Get user successful.", cars)
            return sendError(res, "Not information found.")
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


export default carRoute