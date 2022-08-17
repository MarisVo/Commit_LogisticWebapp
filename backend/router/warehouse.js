import express, { request } from "express"
import Warehouse from "../model/Warehouse.js"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import ProductShipment from "../model/ProductShipment.js"
import { verifyToken, verifyStorekeeper } from "../middleware/index.js"
import { STAFF } from "../constant.js"
import opencage from "opencage-api-client"
import { calculateWarehouseTurnover } from "../service/turnoverWarehouse.js"
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
/**
 * @route PUT /api/warehouse/:id
 * @description update a warehouse by a storekeeper
 * @access private
 */
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
/**
* @route PUT /api/admin/inventory/:warehouseId
* @description add productshipment to a warehouse
* @access private
*/
warehouseRoute.put('/add_inventory/:warehouseId/', verifyToken, verifyStorekeeper,
    async (req, res) => {
        const warehouseId = req.params.warehouseId
        const warehouse = await Warehouse.findById(warehouseId)
        if (!warehouse) {return sendError(res, "warehouse not found.")}
        if (warehouse.storekeeper == req.user.role._id) {
            try {
                let {productShipmentId, turnover} = req.body
                const productShipment = await ProductShipment.findById(productShipmentId)
                const warehouse = await Warehouse.findById(warehouseId)
                if (!productShipment || !warehouse) return sendError(res, "No information")
                let add = {shipment: productShipment, turnover: turnover}
                let inventory_product_shipments = [...warehouse.inventory_product_shipments, add]
                await Warehouse.findByIdAndUpdate(warehouseId, {inventory_product_shipments})
                const totalTurnover = await calculateWarehouseTurnover(warehouseId)
                await Warehouse.findByIdAndUpdate(warehouseId, {turnover: totalTurnover})
                return sendSuccess(res, "Add product shipment successfully")
            }
            catch (error) {
                console.log(error);
                return sendServerError(res)
            }
        } else {
            return sendError(res, "Access denied")
        }
})
/**
* @route PUT /api/admin/export/:warehouseId
* @description export or import productshipment to a warehouse
* @access private
*/
warehouseRoute.put('/update_inventory/:warehouseId', verifyToken, verifyStorekeeper,
    async (req, res) => {
    const warehouseId = req.params.warehouseId
    const warehouse = await Warehouse.findById(warehouseId)
    if (!warehouse) {return sendError(res, "warehouse not found.")}
    if (warehouse.storekeeper == req.user.role._id) {
        try {
            const {productShipmentId, status} = req.body
            if (status != 'import' && status != 'export') return sendError(res, "Status must be 'import' or 'export'")
            const warehouse = await Warehouse.findById(warehouseId)
            const productShipment = await ProductShipment.findById(productShipmentId)
            if (!productShipment || !warehouse) return sendError(res, "No information")
            for (let i = 0; i < warehouse.inventory_product_shipments.length; i++) {
                if (warehouse.inventory_product_shipments[i].shipment == productShipmentId) {
                    warehouse.inventory_product_shipments[i].status = status
                    await Warehouse.findByIdAndUpdate(warehouseId, {inventory_product_shipments: warehouse.inventory_product_shipments})
                    const totalTurnover = await calculateWarehouseTurnover(warehouseId)
                    await Warehouse.findByIdAndUpdate(warehouseId, {turnover: totalTurnover})
                    return sendSuccess(res, `${status} successfully`)
                }
            };
            return sendError(res,"This product shipment can not be found in this warehouse")    
    
        }
        catch (error) {
            return sendServerError(res)
        }
    } else {
        sendError(res, "Access denied.")
    }
    
})
/**
* @route DELETE /api/admin/warehouse/:id
* @description delete a existing warehouse
* @access private
*/

export default warehouseRoute