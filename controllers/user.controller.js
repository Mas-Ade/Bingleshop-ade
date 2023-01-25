// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { User } = require('../database/models')

const { joi } = require('joi')

// const { StatusOrder } = require('../database/models')
// const { registerSchema } = require('../validations/schema/register.schema')
// const { validate } = require("../middlewares/validation")
// const bcrypt = require ('bcrypt')

// Class User
class UserController {

// method untuk akses lihat semua data user
    async getUser(req, res, next) {
        try{
            const dataUser = await User.findAll({
            attributes: ['id_user', 'nama_user', 'noreg_user', 'password', 'email','address','no_telp']
            })
        return new Response(res, 200, dataUser)
        }
        catch(error){
        next(error)
        }}

// Register User
//     async RegisterUser (req, res, next) {
//         try{
// // validasi form
//             const schema = joi.object({
//                 nama_user: joi.string().min(5).required(),
//                 noreg_user: joi.required().string(),
//                 password: joi.string().min(5).required(),
//                 email: joi.email().required(),
//                 address: joi.string().required(),
//                 no_telp: joi.Integer().required()
//             })

//             const {error} = schema.validate(req.body)

//             if (error) {
//                 return next(error)
//             }

//             const nama_user = req.body.nama_user
//                     const noreg_user = req.body.noreg_user
//                     const email = req.body.email
//                     const password = req.body.email
//                     const address = req.body.address
//                     const no_telp = req.body.no_telp

// // create data table user
//             const runRegisterUser = await User.create({
//                 nama_user: nama_user,
//                 noreg_user: noreg_user,
//                 email: email,
//                 password: password,
//                 address: address,
//                 no_telp: no_telp
//             })

//             return new Response(res,200, runRegisterUser)
//         }   
//         catch(error) {
//             next(error)
//             }}




            // validasi request body
            // const {email, password,} = req.body
            // await validate(registerSchema, req.body)

            // // cek ketersediaan email pada database
            // const isExistUser = await User.findOne({
            //     where: {
            //         email
            //     },
            //     attributes: ['id_user']
            // })

            // // Throw error jika email sudah tersedia
            // if(isExistUser) {
            //     throw new ErrorResponse (400, 'email sudah terdaftar !')
            // }

            // hash password
            // const hashPassword = await bcrypt.hash(password, 8)

            // create data table user
            // const runRegisterUser = await User.create({
            //     nama_user: req.body.address,
            //     noreg_user: req.body.noreg_user,
            //     email,
            //     password: hashPassword,
            //     address: req.body.address,
            //     no_telp: req.body.no_telp

            // })

            // return new Response(res,200, runRegisterUser)

            // return result
        // }   
        // catch(error) {
        //     next(error)
        //     }}

    
// method untuk registrasi data user 
    async insertUser (req, res, next) {
        try{
            
//             const createUser = await User.create({
//             nama_user: req.body.nama_user,
//             noreg_user: req.body.noreg_user,
//             email: req.body.email,
//             password: req.body.password,
//             address: req.body.address,
//             no_telp: req.body.no_telp  
//             })
//         return new Response(res, 200, createUser)
//         }   
//         catch(error) {
//             console.log(error)
//             // next(error)
//             }}

// // method untuk cek data user by id_user
//         async findUserbyId (req, res, next) {
//         try {
//             const id = req.body.id_user
//             const findUser = await User.findByPk(id)
//         return new Response(res,200,findUser)
        }   
        catch(error){
            next(error)
        }} 

// method untuk delete data user
    async deleteUser(res,req, next) {
        try {
            const id = User.req.body
            const deleteUserbyId = await User.destroy({where: {id_user: 6}})
        return new Response (res, 201, deleteUserbyId)
        }
        catch(error){
            next(error)
        }}
        
}

module.exports = {
    UserController
}