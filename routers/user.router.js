
// import router module
const router = require('express').Router()
// import itemController class
const {UserController} = require('../controllers/user.controller')
const { validate } = require('../middlewares/validation.register')
const { registerSchema } = require('../validations/schemas/register.schema')
const { LoginController } = require('../controllers/login.controller')


// declare new class
const userController = new UserController()

// route untuk end point user
router.get('/user/datauser', userController.getUser)
// router.get('/user/cekuser/:id', userController.findUserbyId)
router.post('/user/registrasi', validate(registerSchema), userController.insertUser)
// router.delete('/user/delete', userController.deleteUser)
router.post('/user/registrasi', validate(registerSchema), userController.insertUser)
// router.delete('/user/delete', userController.deleteUser)


module.exports = router