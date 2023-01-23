// import express module
const express = require('express')

// inisialisasi app
const app = express()

//import Router Item
const userRouter = require('./routers/user.router')

// Middleware: request -> middleware -> controller/handler
app.use(express.json()) // contoh fungsi express.json()

//Router
app.use('/v1', userRouter)


// app.use((err, req, res, next) => {
//     console.log(err)

//     return res.status(err.status).json({
//         status: false,
//         data: {},
//         error: err.error
//     })
// })

module.exports = app

// MVC: model - view - controller
// SELECT * FROM "items" WHERE item_id = 1
// SELECT * FROM "items" WHERE item_id = 1 AND item_status = 'active'

// MCR: model - controller - router

// model/repository - controller - service - router