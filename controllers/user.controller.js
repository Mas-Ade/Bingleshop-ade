// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js model
const { User } = require('../database/models')
const bcrypt = require ('bcrypt')
const { validate } = require ('../middlewares/validation.register')
const {registerSchema} = require ('../validations/schemas/register.schema')
const ErrorResponse = require("../helpers/error.helper")

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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

        
 // method untuk registrasi data user with validasi (works)
async registerUser (req, res, next) {
        
    try{
        const {nama_user, email, password, address} = req.body

        await validate(registerSchema, req.body)
        
        const cekuser = await User.findOne({
            where: {
                email 
            },
            // attribute adalah key untuk query data yang dicari ( select user by 'id_user' )
            attribute: ['id_user']  
        })

        if(cekuser){
            throw new ErrorResponse (400, 'email sudah terdaftar') 
        }

        const hashPassword = await bcrypt.hash(password, 8)

        if(!cekuser){
        const Register = await User.create({
            nama_user: nama_user,
            email: email,
            password: hashPassword,
            address: address
            })
        return new Response (res, 200, Register)
    }
    }   

    catch(error) {
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk cek data user by id_user
async findUserbyId1 (req, res, next) {
        try {
            const id = req.params.id_user
            const findUser = await User.findAll({attribute: [['id_user',id],['nama_user','admin 2']]})
            return new Response(res,200,findUser).then(()=> {
                res.send('Berikut adalah data anda')
            })
            }   
        catch(error){
            next(error)
        }} 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

//method update user (works)
async updateUser (req, res, next) {
    try {
        const nama = req.body.nama_user
        const id = req.body.id_user
        const updateNama = await User.update({nama_user: nama}, {
            where: {
                id_user: id
            }
        })
        return new Response(res,200,updateNama)
        }   
    catch(error){
        next(error)
    }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one
}

module.exports = {
    UserController
}