import express from "express"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Commitment from "../model/Commitment.js"
import {createLogoDir, verifyAdmin, verifyToken} from "../middleware/index.js"
import { handleFilePath, upload, uploadResources } from "../constant.js"
import {createCommitmentValidate} from "../validation/commitment.js"

const commitmentRoute = express.Router()

/**
 * @route POST /api/commitment/create
 * @description create a new commitment
 * @access public
 */
commitmentRoute.post('/create', 
    verifyToken,
    verifyAdmin,
    createLogoDir,
    uploadResources.single('logo'),   
    async (req, res) => {    
        const error = createCommitmentValidate(req.body)
        if (error) return sendError(res, error)
      
        try {
            const logo = handleFilePath(req.file) 
            const {heading, detail} = req.body;
            const isExist = await Commitment.exists({heading})
            if (isExist) {
                return sendError(res, "Heading is existed !")
            }
                            
            await Commitment.create({heading: heading, logo: logo , detail: detail});
            return sendSuccess(res, 'create commitment successfully.', {heading, logo, detail})
            
        } catch (error) {
            console.log(error)
            if (req.logo) unlinkSync(req.logo.path)
            return sendServerError(res)
        }
    }
)


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
 * @route GET /api/commitment/:commitId
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
 * @route PUT /api/commitment/updateDetail/:id
 * @description update information of a existing commitment
 * @access public
 */
commitmentRoute.put('/updateDetail/:commitmentId', 
    verifyToken,
    verifyAdmin,
    async (req, res) => {    
        try {
            const {commitmentId} = req.params;            
            const commit = await Commitment.findById(commitmentId);
            if (!commit) return sendError(res, "commitment not exist");

            const {detail} = req.body;

            await Commitment.findByIdAndUpdate(commitmentId, {detail: detail})      
                .then(()=> { return sendSuccess(res, "Update commitment successfully")})  
                .catch((err) => { return sendError(res, err)})    
        
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)


/**
 * @route PUT /api/commitment/updateLogo/:id
 * @description upload LOGO for a existing commitment
 * @access public
 */
commitmentRoute.put('/updateLogo/:id', 
    verifyToken,
    verifyAdmin,
    createLogoDir,
    uploadResources.single('logo'),
    async (req, res) => {
        const {id} = req.params
        const logo = handleFilePath(req.file)
        try {
            const commit = await Commitment.findById(id);
            if (!commit) return sendError(res, "commitment not exist");
            
            await Commitment.findByIdAndUpdate(id, { logo: logo })
                .then(()=> { return sendSuccess(res, "Upload logo successfully.")})  
                .catch((err) => { return sendError(res, err)})  
        } catch (error) {
            console.log(error)
            if (req.logo) unlinkSync(req.logo.path)
            return sendServerError(res)
        }
    }
)

/**
 * @route DELETE /api/commitment/delete/:id
 * @description delete a existing commitment
 * @access public
 */
commitmentRoute.delete('/delete/:commitmentId',
 verifyToken,
    verifyAdmin,
 async (req, res) => {
    const {commitmentId} = req.params;    
    try {
        const commit = await Commitment.findById(commitmentId);
        if (!commit) return sendError(res, "commitment not exist");
        
        await Commitment.findByIdAndRemove(commitmentId)
            .then(()=> { return sendSuccess(res, "Delete commitment successfully.")})  
            .catch((err) => { return sendError(res, err)})  
    } catch (error) {
        console.log(error)
        return sendError(res)
    }
})

export default commitmentRoute