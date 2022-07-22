import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import Bill from "../../model/Bill.js"


const billAdminRoute = express.Router()

/**
 * @route POST /api/admin/bill/create
 * @description create information of bill
 * @access private
 */
 billAdminRoute.post('/create', async(req, res) => {
    try {
        const { product_shipments } = req.body
        const isExist = await Bill.exists({ product_shipments })
        if (isExist) 
            return sendError(res, "This bill is already existed.")
        else await Bill.create({ product_shipments })
        return sendSuccess(res, 'set bill information successfully.')
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route DELETE /api/admin/product-shipment/:id
 * @description delete a product shipment existing 
 * @access public
 */
 billAdminRoute.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const isExit = await Bill.exists({_id: id})
        if(!isExit)
            return sendError(res, "Bill not exists")
        
        await Bill.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete bill successfully.")
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
 * @route PUT /api/admin/bill/:id
 * @description update information of product shipment
 * @access private
 */
 billAdminRoute.put('/:id', async (req, res) => {
    try{
        const {product_shipments } = req.body
        const {id} = req.params;
        if (!product_shipments) return sendError(res, "Product shipments is required")
        const isExist = await Bill.exists({product_shipments: product_shipments})
        if (isExist) 
            return sendError(res, "This product shipment existed.")
        await Bill.findByIdAndUpdate(id, {product_shipments: product_shipments})
        return sendSuccess(res, "Update  successfully", {product_shipments})
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }             
})

export default billAdminRoute