// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { User } = require('../database/models')
const { joi } = require('joi')
const { StatusOrder } = require('../database/models')

const bcrypt = require ('bcrypt')

// Class User
class UserController {

// method untuk akses lihat semua data user
    async getUser(req, res, next) {
        try{
            const dataUser = await User.findAll({
            attributes: ['id_user', 'nama_user', 'password', 'email','address']
            })
        return new Response(res, 200, dataUser)
        }
        catch(error){
        next(error)
        }}

        
 // method untuk registrasi data user with validasi 
 async registerUser (req, res, next) {
        
    try{
        const {nama_user, email, password} = req.body
        
        const createUser = await User.create({
            nama_user: nama_user,
            email: email,
            password: password})

        return new Response (res, 200, createUser)
    }   
    catch(error) {
        next(error)
        }}


// method untuk registrasi data user 
async insertUser (req, res, next) {
        
    try{
            
            const createUser = await User.create({
            nama_user: req.body.nama_user,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            })
        return new Response(res, 200, createUser)
        }   
    catch(error) {
            console.log(error)
            // next(error)
            }}

// method untuk cek data user by id_user
async findUserbyId (req, res, next) {
        try {
            const id = req.body.id_user
            const findUser = await User.findOne(id)
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