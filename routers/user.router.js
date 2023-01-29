
// import router module
const router = require('express').Router()
// import itemController class
const {UserController} = require('../controllers/user.controller')
const { registerSchema } = require('../validations/schemas/register.schema')
const { validate } = require("../middlewares/validation.register")


// declare new class
const userController = new UserController()

// route untuk end point user
router.get('/user/datauser',  userController.getUser) // works
router.get('/user/cekuser/:id', userController.findUserbyId) // works
router.post('/user/validasiregis', userController.registerUser) // works
router.delete('/user/delete', userController.deleteUser)

module.exports = router