// import router module
const router = require('express').Router()
// import itemController class
const {ItemsController} = require('../controllers/item.controller')

// declare new class
const itemsController = new ItemsController()

// route untuk end point
router.get('/v1/items', itemsController.getItems)
router.post('/v1/items', itemsController.insertItem)

module.exports = router