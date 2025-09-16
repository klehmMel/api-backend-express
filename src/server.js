import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouters.js'
import customerRouter from './routers/customerRouter.js'
import { logger } from './middlewares/logger.js'

const app = express()
const port = 3333

app.use(logger)
app.use(cors())
app.use(express.json()) // converter o json que chegou na 

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)
app.use('/customer', customerRouter)

app.listen(port, () => {
    console.log()
})