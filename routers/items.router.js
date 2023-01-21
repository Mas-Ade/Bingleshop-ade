// import router module
const router = require('express').Router()
// import itemController class
const {UserController} = require('../controllers/user.controller')

// declare new class
const userController = new UserController()

// route untuk end point
router.get('/v1/items', userController.getItems)
router.post('/v1/items', itemsController.insertItem)

module.exports = router