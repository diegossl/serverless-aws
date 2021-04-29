import { EmployeeController } from '../api/controllers/EmployeeController'
import express from 'express'

const router = express.Router()

router.get('/list', EmployeeController.index)
router.post('/register', EmployeeController.store)
router.put('/update', EmployeeController.update)
router.delete('/delete', EmployeeController.delete)

export default router
