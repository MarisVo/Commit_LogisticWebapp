import express from "express"
import jwt from "jsonwebtoken"
import { sendError, sendSuccess } from "../helper/client.js"

const authRoute = express.Router()

/**
 * @route POST /api/auth/verify-token
 * @description verify user with access token
 * @access public
 */
authRoute.post('/verify-token', (req, res) => {
    const { token } = req.body
    try {
        const { payload } = jwt.verify(token, process.env.JWT_SECRET_KEY, {
            complete: true
        })
        return sendSuccess(res, "Verify token successfully.", {
            user: payload.user
        })
    } catch (error) {
        
        return sendError(res, "Unauthorzied.", 400)
    }
    
})
export default authRoute
