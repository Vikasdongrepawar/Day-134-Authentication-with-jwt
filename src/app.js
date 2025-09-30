const express = require('express')
const authRoutes = require('./routes/auth.routes')
const productRoutes = require('./routes/product.routes')
const custmerRoutes = require('./routes/custmer.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/product', productRoutes)
app.use('/custmer', custmerRoutes)


module.exports = app
