import express from "express"
import Warehouse from "../model/Warehouse.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import ProductShipment from "../model/ProductShipment.js"
const warehouseRoute = express.Router()

/**
 * @route GET /api/warehouse/
 * @description get all warehouse or limit
 * @access public
 */
warehouseRoute.get('/',
    async(req, res) => {
        try {
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const warehouses = await Warehouse.find({}).limit(pageSize).skip(pageSize*page)
            if (warehouses) return sendSuccess(res, "Get warehouse successful.", warehouses)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/warehouse/:id
 * @description get warehouse by id
 * @access public
 */
warehouseRoute.get('/:id',
    async(req, res) => {
        try {
            const {id} = req.params
            const warehouse = await Warehouse.findById(id)
            if (warehouse) return sendSuccess(res, "get warehouse successful.", warehouse)
            return sendError(res, "not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

export default warehouseRoute