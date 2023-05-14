import express from 'express'
const router = express.Router()
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
} from '../controllers/user.js'
import { verifyAdmin } from '../utils/verifyToken.js'
// router.get("/checkuser/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete your account")
// })
router.post('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/find/:id', getUser)
router.get('/', getUsers)
export default router 