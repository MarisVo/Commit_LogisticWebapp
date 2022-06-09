import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import authRoute from "./router/auth.js"
dotenv.config()

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connect MongoDB successfully.')
}).catch(error => console.log(error.reason))

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})