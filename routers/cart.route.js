
// import router module
const router = require('express').Router()
// import itemController class
const {CartController} = require('../controllers/cart.controller')

// declare new class
const cartController = new CartController()

// route untuk end point user
router.get('/cart/datacart', cartController.getCart)
router.get('/cart/cekcart/:id', cartController.findCartbyId)
router.post('/cart/addcart', cartController.insertCart)
router.delete('/cart/delete', cartController.deleteCart)


module.exports = router