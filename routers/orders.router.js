
// import router module
const router = require('express').Router()
// import itemController class
const {OrderController} = require('../controllers/order.controller')

// declare new class
const orderController = new OrderController()

// route untuk end point user
router.get('/order/dataorder', orderController.getOrder) // works
router.get('/order/cekorder/:id', orderController.findOrderbyId) // works
router.post('/order/addorder', orderController.insertOrder) // works
router.delete('/order/delete', orderController.deleteOrder)
router.post('/order/create', orderController.createOrder)


module.exports = router