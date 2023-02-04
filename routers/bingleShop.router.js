// import router module
const router = require('express').Router()

// import Controller class
const {BingleShopController} = require('../controllers/bingleShopController')


// declare Controller
const bingleShopController = new BingleShopController()

// Register
router.post('/register', bingleShopController.registerUser) // works
// Login
router.post('/login', bingleShopController.loginUser) // works

router.post('/cart', bingleShopController.createCart) // works

router.post('/order', bingleShopController.createOrder) // works

module.exports = router