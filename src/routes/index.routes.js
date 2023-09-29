import { Router } from 'express'
import { indexController } from '../controllers/indexController.js'
const i = new indexController()
const router = Router()


router.get('/', i.get_index)


export default router