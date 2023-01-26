
// import router module
const router = require('express').Router()
// import itemController class
const {CartController} = require('../controllers/cart.controller')

// declare new class
const cartController = new CartController()

// route untuk end point user
router.get('/cart/datacart', cartController.getCart) //works
router.get('/cart/cekcart/:id', cartController.findCartbyId) //works
router.post('/cart/addcart', cartController.insertCart) //works
router.delete('/cart/delete', cartController.deleteCart)


module.exports = router