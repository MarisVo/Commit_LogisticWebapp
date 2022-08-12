import express, { request } from "express"
import Warehouse from "../model/Warehouse.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import ProductShipment from "../model/ProductShipment.js"
import { verifyToken, verifyStorekeeper } from "../middleware/index.js"
import { STAFF } from "../constant.js"
import opencage from "opencage-api-client"
const OPENCAGE_API_KEY='7f8d6f65dfd846748331d3c5e0a52070'
const warehouseRoute = express.Router()

/**
 * @route GET /api/warehouse/
 * @description get all warehouse or limit
 * @access public
 */
warehouseRoute.get('/', verifyToken,
    async(req, res) => {
        const role = req.user.role.staff_type || req.user.role.customer_type
        if (role === STAFF.ADMIN) {
            try {
                const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
                const page = req.query.page ? parseInt(req.query.page) : 0
                const { province, district, sortBy } = req.query
                let addressCondition = {}
                if (province && district) 
                    addressCondition = {province: province, district: district}
                const warehouses = await Warehouse.find(addressCondition).limit(pageSize).skip(pageSize*page).sort(`${sortBy}`)
                const length = await Warehouse.count()
                if (warehouses) return sendSuccess(res, "Get warehouse successful.", {length, warehouses})
                return sendError(res, "Not information found.")
            } catch(error){
                return sendServerError(res)
            }
        }
        else {
            sendError(res, "Access denied.")
        }
    }
)
/**
 * @route GET /api/warehouse/:id
 * @description get warehouse by id
 * @access public
 */
warehouseRoute.get('/:id', verifyToken,
    async(req, res) => {
        const role = req.user.role.staff_type || req.user.role.customer_type
        try {
            const {id} = req.params
            const warehouse = await Warehouse.findById(id)
            if (!warehouse) {return sendError(res, "not information found.")}
            if (role === STAFF.ADMIN || (role === STAFF.STOREKEEPER && req.user.role._id == warehouse.storekeeper)) {
                sendSuccess(res, "get warehouse successful.", warehouse)
            }
            else {
                sendError(res, "Access denied.")
            }
        } catch(error){
            return sendServerError(res)
        }
        
        
    }
)

warehouseRoute.put('/:id', verifyToken, verifyStorekeeper,
    async(req, res) => {
            try{
                const {id} = req.params
                const {name, phone, street, ward, district, province} = req.body
                const warehouse = await Warehouse.findById(id)
                if (warehouse.storekeeper == req.user.role._id) {
                    if (warehouse){
                        var lat = 0, lon = 0
                        console.log(name && name !== warehouse.name)
                        if (name && name !== warehouse.name){
                            const isExistName = await Warehouse.exists({name:name})
                            if(isExistName) {return sendError(res, "New name is existed.")}               
                        }
                        
                        if (street && ward && district && province){
                            const data = await opencage.geocode({q: `${street},${ward},${district},${province}`, key: OPENCAGE_API_KEY})            
                            if(data) {
                                if (data.status.code == 200 && data.results.length > 0) {
                                    lat = data.results[0].geometry.lat
                                    lon = data.results[0].geometry.lng 
                                }
                            }
                            if(lon || lat) {
                                await Warehouse.findByIdAndUpdate(id, {name, phone, street, ward, district, province, lon, lat})
                                return sendSuccess(res, "Update warehouse successfully",{name, phone, street, ward, district, province, lon, lat})
                            } else return sendError(res, "supplied address does not exist.")
                            
                        }
                    }
                    else {return sendError(res, "This warehouse name is not existed.")}
                }
                    
                }
            catch (error) {
                console.log(error)
                return sendServerError(res)
            }
    }    
)


export default warehouseRoute