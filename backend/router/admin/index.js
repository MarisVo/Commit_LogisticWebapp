import express from "express"
import authAdminRoute from "./auth.js"
import serviceAdminRoute from "./service.js"
import warehouseAdminRoute from "./warehouse.js"
import aboutAdminRoute from "./about.js"
import contactUsAdminRoute from "./contactUs.js"
import commitmentAdminRoute from "./commitment.js"
import partnerAdminRoute from "./partner.js"
import contactMsgAdminRoute from "./contactMsg.js"
import consultancyAdminRoute from "./consultancy.js"
import participantAdminRoute from "./participant.js"
import quoteAdminRoute from "./quote.js"
const adminRoute = express.Router()

adminRoute.use('/auth', authAdminRoute)
    .use('/service', serviceAdminRoute)
    .use('/warehouse', warehouseAdminRoute)
    .use('/about', aboutAdminRoute)
    .use('/contactus', contactUsAdminRoute)
    .use('/commitment', commitmentAdminRoute)
    .use('/partner', partnerAdminRoute)
    .use('/message', contactMsgAdminRoute)
    .use('/consultancy', consultancyAdminRoute)
    .use('/participant', participantAdminRoute)
    .use('/quote', quoteAdminRoute)
    
export default adminRoute
