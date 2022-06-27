import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Commitment from "../model/Commitment.js"
import {createLogoDir, verifyAdmin, verifyToken} from "../middleware/index.js"
import { handleFilePath, upload, uploadResources } from "../constant.js"
import {createCommitmentValidate} from "../validation/commitment.js"

const commitmentRoute = express.Router()

/**
 * @route GET /api/commitment
 * @description get all commitments
 * @access public
 */
commitmentRoute.get('/', async (req, res) => {
    try {
        const commits = await Commitment.find({})
        if (commits)
            return sendSuccess(res, 'get commitment information successfully.', commits)
        return sendError(res, 'commitment information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

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


/**
 * @route GET /api/commitment/count/:num
 * @description get "num" number of latest commitments
 * @access public
 */
commitmentRoute.get('/count/:num',
    async(req, res) => {
        try {
            const {num} = req.params
            const commitments = await Commitment.find({}).limit(num).sort('-updatedAt')
            if (commitments) return sendSuccess(res, "get commitment successful.", commitments)
            return sendError(res, "not information found.")
        } catch(error){
            console.log(error)
            return sendServerError(res)
        }
    }
)


export default commitmentRoute