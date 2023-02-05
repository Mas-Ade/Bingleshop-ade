// import express module
const express = require('express')
// const bodyParser = require('body-parser')


// inisialisasi app
const app = express()

//import Router Item
const userRouter = require('./routers/user.router')
const itemRouter = require('./routers/items.router')
const cartRouter = require('./routers/cart.route')
const orderRouter = require('./routers/orders.router')
const bingleShop = require('./routers/bingleShop.router')

// Middleware: request -> middleware -> controller/handler
app.use(express.json()) // contoh fungsi express.json()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


//Router
app.use('/v1', userRouter)
app.use('/v1', itemRouter)
app.use('/v1', cartRouter)
app.use('/v1', orderRouter)
app.use('/v1', bingleShop)


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