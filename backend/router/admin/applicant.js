import express from "express"
import { sendError, sendServerError, sendAutoMail, sendSuccess } from "../helper/client.js"
import { APPLICANT_STATUS } from "../constant.js"
import { updateStatusValidate } from "../validation/applicant.js"
import Applicant from "../model/Applicant.js"

const applicantAdminRoute = express.Router()



/**
 * @route PUT /api/admin/applicant/:id
 * @description update status of an existing applicant
 * @access private
 */
applicantAdminRoute.put('/:id',
    async (req, res) => {
        const {id} = req.params;
        const {status} = req.body;
        const errors = updateStatusValidate (req.body)
        if (errors)
            return sendError(res, errors)
        try {
            const applicant = await Applicant.findById(id);
            if (applicant){
                await Applicant.findByIdAndUpdate(id, {status: status})
                return sendSuccess(res, "Update applicant successfully.", {status: status})
            }        
            return sendError(res, "Applicant does not exist.")

        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)

/**
 * @route GET /api/admin/applicant
 * @description get applicant information
 * @access public
 */
 applicantAdminRoute.get('/',
 async (req, res) => {
     try {
         const applicant = await applicant.find({})
         if (applicant)
             return sendSuccess(res, 'get applicant information successfully.', Applicant)
         return sendError(res, 'applicant information is not found.')
     } catch (error) {
         console.log(error)
         return sendServerError(res)
     }
 })



/**
 * @route DELETE /api/admin/applicant/:id
 * @description delete an existing applicant
 * @access private
 */
 applicantAdminRoute.delete('/:id',
 async (req, res) => {
     const {id} = req.params    
     try {
         const isExist = await Applicant.exists({_id: id})
         if (!isExist) return sendError(res, "Applicant does not exist.")
         
         await Applicant.findByIdAndRemove(id)
             .then(()=> { return sendSuccess(res, "Delete applicant successfully.")})  
             .catch((err) => { return sendError(res, err)})  
     } catch (error) {
         console.log(error)
         return sendError(res)
     }
 }
)





export default applicantAdminRoute