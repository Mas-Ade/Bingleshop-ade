
// import router module
const router = require('express').Router()
// import itemController class
const {StatusOrderController} = require('../controllers/orderStatus.controller')

// declare new class
const statusOrderController = new StatusOrderController()

// route untuk end point user
router.get('/status/datastatus', statusOrderController.getStatusOrder)
router.get('/status/cekstatus/:id', statusOrderController.findStatusOrderbyId)
router.post('/status/addstatusorder', statusOrderController.insertStatusOrder)
router.delete('/status/delete', statusOrderController.deleteStatusOrder)


module.exports = router