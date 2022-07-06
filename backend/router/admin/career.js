import express from 'express'
import argon2 from "argon2"
import { sendError, sendServerError, sendSuccess } from '../../helper/client.js'
import Career from '../../model/Career.js'
import { careerRegisterValidate } from '../../validation/career.js'
import Department from '../../model/Department.js'


const careerAdminRoute = express.Router()

/**
 * @route POST /api/admin/career/
 * @description register new career offer
 * @access private
 */
 careerAdminRoute.post('/',
 async (req, res) => {
    const errors = careerRegisterValidate(req.body)
    if (errors)
        return sendError(res, errors)

     let { name, type, description, location, state, bonus, deadline, departmentId } = req.body

     try {
         const isExist = await Career.exists()
         if (isExist)
            return sendError(res, 'career already exists')

         

        const career = await Career.create({
            name, type, description, location, state, bonus, deadline
         })
         

         const department = await Department.exists({ _id: req.params.departmentId })
         if (department) {
             await Department.updateOne({
                 _id: department._id
             },
                 {
                     $push: { careers: { career } }
                 })
             return sendSuccess(res, 'Added career in department file successfully')
         }

     } catch (error) {
         return sendServerError(res)
     }
     return sendSuccess(res, 'career registered successfully.')
 }
)




/**
 * @route PUT /api/admin/career/:id
 * @description update details of an existing career
 * @access private
 */
careerAdminRoute.put('/:id',
    async (req, res) => {
        const {id} = req.params
        const errors = careerRegisterValidate(req.body)
        if (errors)
            return sendError(res, errors)
        let { name, type, description, location, state, bonus, deadline } = req.body
        try {
            const career = await Career.findById(id)
            if (career){
                await Career.findByIdAndUpdate(id, { name: name, type: type, description: description, location: location, state: state, bonus: bonus, deadline: deadline })
                return sendSuccess(res, "Update career successfully.", { name: name, type: type, description: description, location: location, state: state, bonus: bonus, deadline: deadline })
            }        
            return sendError(res, "Career does not exist.")

        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)

/**
 * @route DELETE /api/admin/career/:id
 * @description delete an existing career
 * @access private
 */
careerAdminRoute.delete('/:id',
    async (req, res) => {
        const {id} = req.params    
        try {
            const isExist = await Career.exists({_id: id})
            if (!isExist) return sendError(res, "Career does not exist.")
            
            await Career.findByIdAndRemove(id)
                .then(()=> { return sendSuccess(res, "Delete career successfully.")})  
                .catch((err) => { return sendError(res, err)})  
        } catch (error) {
            console.log(error)
            return sendError(res)
        }
    }
)




export default careerAdminRoute





