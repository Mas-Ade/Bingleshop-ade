// import express module
const express = require('express')

// inisialisasi app
const app = express()

//import Router Item
const userRouter = require('./routers/user.router')
const itemRouter = require('./routers/items.router')
const cartRouter = require('./routers/cart.route')

// Middleware: request -> middleware -> controller/handler
app.use(express.json()) // contoh fungsi express.json()

//Router
app.use('/v1', userRouter)
app.use('/v1', itemRouter)
app.use('/v1', cartRouter)

module.exports = app

// MVC: model - view - controller
// SELECT * FROM "items" WHERE item_id = 1
// SELECT * FROM "items" WHERE item_id = 1 AND item_status = 'active'

// MCR: model - controller - router

// model/repository - controller - service - router