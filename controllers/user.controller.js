// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { User } = require('../database/models')

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
    
// method untuk registrasi data user 
    async insertUser (req, res, next) {
        try{
            const createUser = await User.create({
            nama_user: req.body.nama_user,
            noreg_user: req.body.noreg_user,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            no_telp: req.body.no_telp  
            })
        return new Response(res, 200, createUser)
        }   
        catch(error) {
            next(error)
            }}

// method untuk cek data user by id_user
        async findUserbyId (req, res, next) {
        try {
            const id = req.body.id_user
            const findUser = await User.findByPk(id)
        return new Response(res,200,findUser)
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