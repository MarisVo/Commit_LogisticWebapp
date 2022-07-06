import express from "express"
import fileUpload from 'express'
import { unlinkSync } from 'fs'
import { sendError, sendServerError, sendAutoMail, sendSuccess } from "../helper/client.js"
import { APPLICANT_STATUS, uploadResources } from "../constant.js"
import { submitApplicantValidate } from "../validation/applicant.js"
import { createUploadDir } from "../middleware/index.js"
import Applicant from "../model/Applicant.js"
import Career from '../model/Career.js'

import multer from 'multer'
const uploadHandle = multer()

const applicantRoute = express.Router()
applicantRoute.use(fileUpload())




/**
 * @route POST /api/applicant
 * @description applicant submit
 * @access public
 */
 applicantRoute.post('/',

  uploadHandle.array(),
  async (req, res) => {
    const errors = submitApplicantValidate (req.body)
    if (errors)
        return sendError(res, errors)
    let { firstName, lastName, phone, email, source, message, careerId} = req.body

    
    try {
        const applicant = new Applicant({ firstName, lastName, phone, email, source, message})
        


        const cvPath = console.log(req.files.file.data.toString());
        
        const options = {
            from: applicant.email,
            to: process.env.MAIL_HOST,
            subject: applicant.lastName + '_CV',
            html: `<p>Job application CV</p>`,

            attachments: [
                {   
                path: cvPath
                }
            ]
        }
        const sendMailSuccess = await sendAutoMail(options)
        
        if (!sendMailSuccess) return sendError(res, 'send CV failed.')
        const ret = await applicant.save()
        const career = await Career.exists({ _id: req.params.careerId })
        if (career) {
            await Career.updateOne({
                 _id: career._id
             },
                 {
                     $push: { applicants: { applicant } }
                 })
             return sendSuccess(res, 'Added applicant in career successfully')
         }
    } catch (error) {
        console.log(error)
        if (req.cv) unlinkSync(req.cv.path)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/applicant/:id
 * @description get applicant status information
 * @access public
 */
 applicantRoute.get('/',
 async (req, res) => {
    const {id} = req.params; 
     try {
        const applicant = await Applicant.exists({_id: id})
        if (!applicant) return sendError(res, "Applicant not exists.")
         if (applicant)
             return sendSuccess(res, 'get applicant information successfully.', Applicant.status)
         return sendError(res, 'applicant information is not found.')
     } catch (error) {
         console.log(error)
         return sendServerError(res)
     }
 })



export default applicantRoute