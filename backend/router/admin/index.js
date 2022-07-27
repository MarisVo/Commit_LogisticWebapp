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
import consultancyAdminRoute from "./consultancy.js"
import participantAdminRoute from "./participant.js"
import quoteAdminRoute from "./quote.js"
import orderAdminRoute from "./order.js"
import applicantAdminRoute from "./applicant.js"
import careerAdminRoute from "./career.js"
import departmentAdminRoute from "./department.js"

const adminRoute = express.Router()

adminRoute.use('/auth', authAdminRoute)
    .use('/service', serviceAdminRoute)
    .use('/warehouse', warehouseAdminRoute)
    .use('/about', aboutAdminRoute)
    .use('/contactus', contactUsAdminRoute)
    .use('/commitment', commitmentAdminRoute)
    .use('/partner', partnerAdminRoute)
    .use('/message', contactMsgAdminRoute)
    .use('/user', userAdminRoute)
    .use('/car', carAdminRoute)
    .use('/road', roadAdminRoute)
    .use('/bill', billAdminRoute)
    .use('/product-shipment', productShipmentAdminRoute)
    .use('/prohibited-product', prohibitedProductAdminRoute)
    .use('/consultancy', consultancyAdminRoute)
    .use('/participant', participantAdminRoute)
    .use('/quote', quoteAdminRoute)
    .use('/order', orderAdminRoute)
    .use("/applicant", applicantAdminRoute)
    .use("/career", careerAdminRoute)
    .use("/department", departmentAdminRoute);
    
export default adminRoute
