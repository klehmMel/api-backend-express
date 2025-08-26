import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import {listProductController} from '../controllers/product/'
import { getElementByIdController } from '../controllers/product/getByIdProductController.js'
import {editProductController} from '../controllers/product/editProductController.js'
import {deleteProductController} from '../controllers/product/deleteProductController.js'

const router = express.Router()



router.post('/', createProductController)
router.get('/', listProductController)
router.get('/', getElementByIdController )
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)


export default router