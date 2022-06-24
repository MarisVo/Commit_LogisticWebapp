import express from "express"
import argon2 from "argon2"
import User from "../model/User.js"
import { staffRegisterValidate } from "../validation/auth.js"
import { sendError, sendRequest, sendServerError, sendSuccess } from "../helper/client.js"
import Staff from "../model/Staff.js"
import { createAssetsDir, createLogoDir, createUploadDir, verifyAdmin, verifyToken } from "../middleware/index.js"
import { handleFilePath, RETURN_ZONE, upload, uploadResources } from "../constant.js"
import Price from "../model/Price.js"
import { createDistanceValidate, createPriceValidate, createServiceValidate, uploadPricelistValidate } from "../validation/service.js"
import DeliveryService from "../model/DeliveryService.js"
import Distance from '../model/Distance.js'
import { createWarehouseValidate } from "../validation/warehouse.js"
import Warehouse from "../model/Warehouse.js"
import { unlinkSync } from "fs"
import Customer from "../model/Customer.js"
import About from "../model/About.js"
import Contact from "../model/Contact.js"
import { createOrUpdateContactUsValidate } from '../validation/contactUs.js'

const adminRoute = express.Router()

/**
 * @route POST /api/admin/auth/register
 * @description register staff account
 * @access private
 */
adminRoute.post('/auth/register',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = staffRegisterValidate(req.body)
        if (errors)
            return sendError(res, errors)

        let { name, email, password, phone, staff_type } = req.body

        try {
            const isExist = await User.exists({
                $or: [
                    { email, phone },
                    { email, phone: null },
                    { phone, email: null }
                ]
            })
            if (isExist)
                return sendError(res, 'user is exist')

            const newStaff = await Staff.create({
                name,
                staff_type
            })

            password = await argon2.hash(password)
            await User.create({
                name, email, password, phone, role: newStaff._id, isActive: true
            })
        } catch (error) {
            return sendServerError(res)
        }
        return sendSuccess(res, 'user registered successfully.')
    })

/**
 * @route POST /api/admin/auth/unaccepted-register
 * @description get list of unaccepted registers of business account
 * @access private
 */
adminRoute.get('/auth/unaccepted-register',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        try {
            const businesses = await User.find({ isActive: true })
                .populate({ path: 'role', model: Customer })
            const result = businesses.filter(value => {
                return value.role && value.role.customer_type === 'business'
            })
            return sendSuccess(res, 'success', result)
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/auth/accept-register/:customerId
 * @description accept active the business's register
 * @access private
 */
adminRoute.post('/auth/accept-register/:customerId',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        try {
            const business = await Customer.findOneAndUpdate({ _id: req.params.customerId, accepted_business: false }, { accepted_business: true })
            if (!business) return sendError(res, 'this customer does not exist or is accepted register.')
            sendSuccess(res, 'request successfully.')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/service/:serviceId/price/create
 * @description create price table for delivery service
 * @access private
 */
adminRoute.post('/service/:serviceId/price/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createPriceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const validateTypesOfData = Object.values(req.body).every(value => {
            return Array.isArray(value) && value.every(v => {
                return v.hasOwnProperty('next') && v.hasOwnProperty('sidestep') && v.hasOwnProperty('prices') && Array.isArray(v.prices) && v.prices.length === Object.keys(RETURN_ZONE).length
            })
        })
        if (!validateTypesOfData)
            return sendError(res, 'request\'s body is incorrect.')

        const { kg, ton, m3 } = req.body

        try {
            const service = await DeliveryService.exists({ _id: req.params.serviceId })
            if (service) {
                const price = await Price.create({
                    uKG: kg,
                    uM3: m3,
                    uTON: ton
                })
                await DeliveryService.findOneAndUpdate({ _id: service._id }, { price: price._id })
            }
            return sendSuccess(res, 'create price table successfully.')
        }
        catch (error) {
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/service/:serviceId/pricelist
 * @description upload price files for service
 * @access private
 */
adminRoute.post('/service/:serviceId/pricelist',
    verifyToken,
    verifyAdmin,
    createUploadDir,
    upload.single('pricelist'),
    async (req, res) => {
        const errors = uploadPricelistValidate(req.body)
        if (errors) {
            if (req.file) unlinkSync(req.file.path)
            return sendError(res, errors)
        }
        const file = handleFilePath(req.file)

        const { province } = req.body

        try {
            const isExist = await DeliveryService.exists({ _id: req.params.serviceId })
            if (isExist) {
                await DeliveryService.updateOne({
                    _id: isExist._id
                },
                    {
                        $push: { price_files: { province, file } }
                    })
                return sendSuccess(res, 'upload pricelist file successfully')
            }
            if (req.file) unlinkSync(req.file.path)
            return sendError(res, "product's name had existed.")
        } catch (error) {
            if (req.file) unlinkSync(req.file.path)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/service/:serviceId/distance/create
 * @description create delivery road for delivery service
 * @access private
 */
adminRoute.post('/service/:serviceId/distance/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createDistanceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { fromProvince, toProvince, zonecode } = req.body

        try {
            const service = await DeliveryService.exists({ _id: req.params.serviceId })
            if (service) {
                const distance = await Distance.create({
                    fromProvince,
                    toProvince,
                    zonecode
                })
                await DeliveryService.findOneAndUpdate({ _id: service._id }, { $push: { distances: distance } })
            }
            return sendSuccess(res, 'create distance successfully.')
        }
        catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/service/create
 * @description create new delivery service
 * @access private
 */
adminRoute.post('/service/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createServiceValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { name, subDetail, target } = req.body

        try {
            await DeliveryService.create({
                name,
                sub_detail: subDetail,
                target
            })
            return sendSuccess(res, 'create new service successfully.')
        }
        catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/warehouse/create
 * @description create new warehouse
 * @access private
 */
adminRoute.post('/warehouse/create',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const errors = createWarehouseValidate(req.body)
        if (errors)
            return sendError(res, errors)

        const { name, phone, street, ward, district, province } = req.body

        try {
            const isExist = await Warehouse.exists({ name })
            if (isExist) return sendError(res, 'the warehouse\'s name is existed.')

            const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${street},${ward},${district},${province}`
            const result = await sendRequest(url, 'GET')
            if (result.status === 200 && result.data.length > 0) {
                const { lon, lat } = result.data[0]
                await Warehouse.create({
                    name, phone, street, ward, district, province, lon, lat
                })
                return sendSuccess(res, 'create new warehouse successfully.')
            }
            return sendError(res, 'supplied address does not exist.')
        }
        catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/about/banners
 * @description create/update aboutus banners
 * @access private
 */
adminRoute.post('/about/banners',
    verifyToken,
    verifyAdmin,
    createAssetsDir,
    uploadResources.array('banners'),
    async (req, res) => {
        const files = req.files.map(file => handleFilePath(file))
        try {
            const isExist = await About.exists({})
            if (isExist) {
                await About.findOneAndUpdate({}, { banners: files })
            }
            else await About.create({ banners: files })
            return sendSuccess(res, 'upload banners successfully.')
        } catch (error) {
            if (req.file) unlinkSync(req.file.path)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/about/logo
 * @description create/update aboutus logo
 * @access private
 */
adminRoute.post('/about/logo',
    verifyToken,
    verifyAdmin,
    createLogoDir,
    uploadResources.single('logo'),
    async (req, res) => {
        const file = handleFilePath(req.file)
        try {
            const isExist = await About.exists({})
            if (isExist) {
                await About.findOneAndUpdate({}, { logo: file })
            }
            else await About.create({ logo: file })
            return sendSuccess(res, 'upload logo successfully.')
        } catch (error) {
            if (req.file) unlinkSync(req.file.path)
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/about
 * @description create/update aboutus info
 * @access private
 */
adminRoute.post('/about',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const { description, vision, values } = req.body
        try {
            const isExist = await About.exists({})
            if (isExist) {
                await About.findOneAndUpdate({}, { description, vision, values })
            }
            else await About.create({ description, vision, values })
            return sendSuccess(res, 'set about-us information successfully.')
        } catch (error) {
            return sendServerError(res)
        }
    })

/**
 * @route POST /api/admin/contactus
 * @description create/update contactus info
 * @access private
 */
adminRoute.post('/contactus',
    verifyToken,
    verifyAdmin,
    async (req, res) => {
        const error = createOrUpdateContactUsValidate(req.body)
        if (error)
            return sendError(res, error)

        const { address, phone, email, facebook, instagram, tiktok, youtube } = req.body
        try {
            const isExist = await Contact.exists({})
            if (isExist) {
                await Contact.findOneAndUpdate({}, { address, phone, email, facebook, instagram, tiktok, youtube })
            }
            else await Contact.create({ address, phone, email, facebook, instagram, tiktok, youtube })
            return sendSuccess(res, 'set contact-us information successfully.')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


export default adminRoute