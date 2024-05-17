import {Router} from 'express'
import {createUserValidator, updateUserValidator, deleteUserValidator} from '../validators/user.validator.js'


import UserController from '../controllers/user.controller.js'
const router = Router()
router.get('/', UserController.index)
export default router

router.post('/:id', createUserValidator, UserController.create)

router.get('/:id', UserController.show)

router.put('/:id', updateUserValidator, UserController.update)
router.delete('/:id', deleteUserValidator, UserController.delete)

