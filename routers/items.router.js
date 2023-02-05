
// import router module
const router = require('express').Router()
// import itemController class
const {ItemController} = require('../controllers/item.controller')

// declare new class
const itemController = new ItemController()

// route untuk end point user
router.get('/item/dataitem', itemController.getItem) // works
router.get('/item/cekitem/:id', itemController.findItembyId) // works
router.post('/item/additem', itemController.insertItem) // works
router.put('/item/addstock', itemController.updateStockItem)
router.delete('/item/delete', itemController.deleteItem)

module.exports = router