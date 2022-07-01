import express from "express"
import { sendError, sendServerError,sendAutoMail, sendSuccess } from "../../helper/client.js"
import Consultancy from "../../model/Consultancy.js"
import DeliveryService from "../../model/DeliveryService.js"
const consultancyAdminRoute = express.Router()


/**
 * @route GET /api/admin/consultancy
 * @description Get list of consultancy (all or paging)
 * @access private
 */
consultancyAdminRoute.get('/', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const consultancy = await Consultancy.find({}).limit(pageSize).skip(pageSize*page)
        if (consultancy)
            return sendSuccess(res, 'get consultancy information successfully.', consultancy)
        return sendError(res, 'consultancy information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/consultancy/:id
 * @description get a consultancy by id
 * @access 
 */
consultancyAdminRoute.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const consultancy = await Consultancy.findById(id)
        if (consultancy)
            return sendSuccess(res, 'get consultancy information successfully.', consultancy)
        return sendError(res, 'consultancy information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/consultancy/:id
 * @description update information of a consultancy
 * @access private
 */
consultancyAdminRoute.put('/:id',
    async (req, res) => {
        try{
            const {id} = req.params
            const {service, serviceName, serviceId , name, email, phone, district, province, ward, fulladdress, parcel, quantity} = req.body
            const isExist = await Consultancy.exists({_id: id})
            if (! isExist) return sendError(res, "This consultancy is not existed.")
            if (serviceName || serviceId){
                const service = await DeliveryService.findOne({
                    $or: [
                        { _id: serviceId },
                        { name: serviceName }
                    ]
                })
                if (!service) return sendError(res, 'the service is not exist.')    
            }
            await Consultancy.findByIdAndUpdate(id,{$set: {service, name, email, phone,  district, province, ward, fulladdress, parcel, quantity}})
            return sendSuccess(res, "Update consultancy successfully",  {service, name, email, phone,  district, province, ward, fulladdress, parcel, quantity})            
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }             
    }
)

/**
 * @route DELETE /api/admin/consultancy/:id
 * @description delete a existing consultancy
 * @access private
 */
consultancyAdminRoute.delete('/:id',
    async (req, res) => {
        try {
            const {id} = req.params;    
            const isExist = await Consultancy.exists({_id: id})
            if (!isExist) return sendError(res, "Consultancy not exists.")            
            await Consultancy.findByIdAndRemove(id)
            return sendSuccess(res, "Delete successfully.") 
        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)

export default consultancyAdminRoute