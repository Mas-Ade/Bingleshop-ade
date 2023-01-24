
// import router module
const router = require('express').Router()
// import itemController class
const {OrderController} = require('../controllers/order.controller')

// declare new class
const orderController = new OrderController()

// route untuk end point user
router.get('/order/dataorder', orderController.getOrder)
router.get('/order/cekorder/:id', orderController.findOrderbyId)
router.post('/order/addorder', orderController.insertOrder)
router.delete('/order/delete', orderController.deleteOrder)


module.exports = router