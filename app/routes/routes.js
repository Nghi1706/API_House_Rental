import express from 'express'
const router = express.Router()
import { signin, signout, authentica } from '../controllers/account.js'

// accounr 
router.post('/signin', signin)
router.get('/signout', signout)
router.get('/auth', authentica)
export default router