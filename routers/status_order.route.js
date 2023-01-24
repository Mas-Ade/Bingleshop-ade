
// import router module
const router = require('express').Router()
// import itemController class
const {StatusOrderController} = require('../controllers/user.controller')

// declare new class
const userController = new UserController()

// route untuk end point user
router.get('/user/datauser', userController.getUser)
router.get('/user/cekuser/:id', userController.findUserbyId)
router.post('/user/registrasi', userController.insertUser)
router.delete('/user/delete', userController.deleteUser)


module.exports = router