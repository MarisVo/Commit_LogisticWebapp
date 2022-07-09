import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Career from "../model/Career.js"

const careerRoute = express.Router()

/**
 * @route GET /api/career
 * @description get career information
 * @access public
 */
careerRoute.get('/',
    async (req, res) => {
        try {
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const career = await Career.find({}).limit(pageSize).skip(pageSize*page)
            if (career)
                return sendSuccess(res, 'get career information successfully.', career)
            return sendError(res, 'career information is not found.')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route GET /api/career/id/:id
 * @description get a single career information
 * @access public
 */

 careerRoute.get('id/:id',
 async (req, res) => {
     try {
        const {id} = req.params
        const career = await Career.exists({_id: id})
        if (!career) return sendError(res, "Career does not exist.")
        
        
         if (career)
             return sendSuccess(res, 'get career information successfully.', career)
         return sendError(res, 'career information is not found.')
     } catch (error) {
         console.log(error)
         return sendServerError(res)
     }
 })


 /**
 * @route GET /api/career/search/:keyword
 * @description get career information by keyword
 * @access public
 */

  careerRoute.get('/search/:keyword',
  async (req, res) => {
      try {
          const {keyword} = req.params
          const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
          const page = req.query.page ? parseInt(req.query.page) : 0
          const career = await Career.find({ $in: [ keyword ] }).limit(pageSize).skip(pageSize*page)
          if (career)
              return sendSuccess(res, 'get career information successfully.', career)
          return sendError(res, 'career information is not found.')
      } catch (error) {
          console.log(error)
          return sendServerError(res)
      }
  })
 

/**
 * @route GET /api/career/filter
 * @description filter career information
 * @access public
 */

 careerRoute.get('/filter',
 async (req, res) => {
   
     try {
         
       const { department, type,  location, state } = req.query
       
         const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
         const page = req.query.page ? parseInt(req.query.page) : 0
         const career = await Career.find({ 
               $or: [
                   {department: department},
                   {type: type},
                   {location: location},
                   {state: state}
               ]
          }).limit(pageSize).skip(pageSize*page)
         if (career)
             return sendSuccess(res, 'get career information successfully.', career)
         return sendError(res, 'career information is not found.')
     } catch (error) {
         console.log(error)
         return sendServerError(res)
     }
 })




 /**
 * @route GET /api/career/sort
 * @description sort career information
 * @access public
 */

  careerRoute.get('/sort',
  async (req, res) => {
      try {
          //const { name } = req.query.name
          //const { deadline } = req.query.deadline
          const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
          const page = req.query.page ? parseInt(req.query.page) : 0
          const sortBy = req.query.sortBy 
          const career = await Career.find({ }).limit(pageSize).skip(pageSize*page).sort(-sortBy)
          if (career)
              return sendSuccess(res, 'get career information successfully.', career)
          return sendError(res, 'career information is not found.')
      } catch (error) {
          console.log(error)
          return sendServerError(res)
      }
  })




export default careerRoute
