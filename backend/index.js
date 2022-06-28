import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import YAML from 'yamljs'

import authRoute from "./router/auth.js"
import adminRoute from "./router/admin/index.js"
import trackingRoute from "./router/tracking.js"
import orderRoute from "./router/order.js"
import aboutRoute from "./router/about.js"
import publicRoute from "./router/public.js"
import contactUsRoute from "./router/contactUs.js"
import commitmentRoute from "./router/commitment.js"
// import partnerRoute from "./router/partner.js"
// import quoteRoute from "./router/quote.js"


// swagger setup
import swaggerUi from 'swagger-ui-express'
const swaggerDocument = YAML.load('./swagger.yaml')

import { verifyAdmin, verifyToken } from "./middleware/index.js"
dotenv.config()

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connect MongoDB successfully.')
}).catch(error => console.log(error.reason))

const PORT = process.env.PORT || 8000
export const TOKEN_LIST = {}
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use('/api/public', publicRoute)
    .use('/api/admin', verifyToken, verifyAdmin, adminRoute)
    .use('/api/auth', authRoute)
    .use('/api/tracking', trackingRoute)
    .use('/api/order', orderRoute)
    .use('/api/about', aboutRoute)
    .use('/api/contactus', contactUsRoute)
    .use('/api/commitment', commitmentRoute)
    // .use('/api/partner', partnerRoute)
    // .use('/api/quote', quoteRoute)

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})