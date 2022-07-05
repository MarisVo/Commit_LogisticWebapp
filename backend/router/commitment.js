import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Commitment from "../model/Commitment.js"

const commitmentRoute = express.Router()

/**
 * @route GET /api/commitment
 * @description get all commitments
 * @access public
 */

commitmentRoute.get('/',
    async(req, res) => {
        const {limit} = req.query
        try {
            const commits = await Commitment.find({}).limit(limit).sort('-updatedAt')
            if (commits) return sendSuccess(res, "Get commitment successful.", commits)
            return sendError(res, "Not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/commitment/:commitmentId
 * @description get a commitment by id
 * @access public
 */
commitmentRoute.get('/:commitmentId', async (req, res) => {
    try {
        const {commitmentId} = req.params;
        const commit = await Commitment.findById(commitmentId)
        if (commit)
            return sendSuccess(res, 'get commitment information successfully.', commit)
        return sendError(res, 'commitment information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default commitmentRoute