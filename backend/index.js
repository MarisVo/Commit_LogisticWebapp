import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import authRoute from "./router/auth.js"
import adminRoute from "./router/admin/index.js"
import trackingRoute from "./router/tracking.js"
import orderRoute from "./router/order.js"
import aboutRoute from "./router/about.js"
import publicRoute from "./router/public.js"
import contactUsRoute from "./router/contactUs.js"
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

app.use('/public', publicRoute)
    .use('/api/admin', verifyToken, verifyAdmin, adminRoute)
    .use('/api/auth', authRoute)
    .use('/api/tracking', trackingRoute)
    .use('/api/order', orderRoute)
    .use('/api/about', aboutRoute)
    .use('/api/contactus', contactUsRoute)

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})