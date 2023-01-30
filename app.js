// import express module
const express = require('express')

// inisialisasi app
const app = express()

//import Router Item
const userRouter = require('./routers/user.router')
const itemRouter = require('./routers/items.router')
const cartRouter = require('./routers/cart.route')
const orderRouter = require('./routers/orders.router')

// Middleware: request -> middleware -> controller/handler
app.use(express.json()) // contoh fungsi express.json()

//Router
app.use('/v1', userRouter)
app.use('/v1', itemRouter)
app.use('/v1', cartRouter)
app.use('/v1', orderRouter)


// function catch error/ next
app.use((err, req, res, next) => {
    console.log(err)
    const status = err.status || 500 || 404 || 400
    const error = err.error || err.message || "internal server error"

    return res.status(status).json({
        status: false,
        data: {},
        error: error
    })
})


module.exports = app