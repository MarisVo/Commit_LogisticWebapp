import express from "express"
import authAdminRoute from "./auth.js"
import serviceAdminRoute from "./service.js"
import warehouseAdminRoute from "./warehouse.js"
import aboutAdminRoute from "./about.js"
import contactUsAdminRoute from "./contactUs.js"

const adminRoute = express.Router()

adminRoute.use('/auth', authAdminRoute)
    .use('/service', serviceAdminRoute)
    .use('/warehouse', warehouseAdminRoute)
    .use('/about', aboutAdminRoute)
    .use('/contactus', contactUsAdminRoute)

export default adminRoute