import express from 'express'
import { sendError, sendSuccess } from "../../helper/client.js";
import User from "../../model/User.js";

const userAdminRoute = express.Router()

/**
 * @route DELETE /api/admin/user/:id
 * @description delete a user existing 
 * @access private
 */
userAdminRoute.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const isExit = await User.exists({_id: id})
        if(!isExit)
            return sendError(res, "User not exists")
        
        await User.findByIdAndRemove(id)
            .then(() => {
                return sendSuccess(res, "Delete user successfully.")
            })
            .catch((err) => {
                return sendError(res, err)
            })
    }
    catch(error) {
        console.log(error)
        return sendError(res)
    }
})

export default userAdminRoute