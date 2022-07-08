import express from "express"
import authAdminRoute from "./auth.js"
import serviceAdminRoute from "./service.js"
import warehouseAdminRoute from "./warehouse.js"
import aboutAdminRoute from "./about.js"
import contactUsAdminRoute from "./contactUs.js"
import commitmentAdminRoute from "./commitment.js"
import partnerAdminRoute from "./partner.js"
import contactMsgAdminRoute from "./contactMsg.js"
import userAdminRoute from "./user.js"
import carAdminRoute from "./car.js"
import roadAdminRoute from "./road.js"
import billAdminRoute from "./bill.js"
import productShipmentAdminRoute from "./productShipment.js"
import prohibitedProductAdminRoute from "./ProhibitedProduct.js"

const adminRoute = express.Router()

adminRoute.use('/auth', authAdminRoute)
    .use('/service', serviceAdminRoute)
    .use('/warehouse', warehouseAdminRoute)
    .use('/about', aboutAdminRoute)
    .use('/contactus', contactUsAdminRoute)
    .use('/commitment', commitmentAdminRoute)
    .use('/partner', partnerAdminRoute)
    .use('/message', contactMsgAdminRoute)
    .use('/partner', partnerAdminRoute)
    .use('/user', userAdminRoute)
    .use('/car', carAdminRoute)
    .use('/road', roadAdminRoute)
    .use('/bill', billAdminRoute)
    .use('/product-shipment', productShipmentAdminRoute)
    .use('/prohibited-product', prohibitedProductAdminRoute)
    
export default adminRoute