// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js model
const { User, Item, Cart, Order } = require('../database/models')
const bcrypt = require ('bcrypt')
const { validate } = require ('../middlewares/validation.register')
const {registerSchema} = require ('../validations/schemas/register.schema')
const ErrorResponse = require("../helpers/error.helper")
const Tm_users = require("../database/models/tm_users")

// Class User
class BingleShopController {

// method untuk registrasi data user with validasi (works)
async registerUser (req, res, next) {
        
    try{
        const {nama_user, email, password, address} = req.body

        await validate(registerSchema, req.body)
        
        const checkUser = await User.findOne({
            where: {
                email 
            },
            // attribute adalah key untuk query data yang dicari ( select user by 'id_user' )
            attribute: ['id_user']  
        })

        if(checkUser){
            throw new ErrorResponse (400, 'email sudah terdaftar') 
        }

        const hashPassword = await bcrypt.hash(password, 8)

        if(!checkUser){
        const Register = await User.create({
            nama_user: nama_user,
            email: email,
            password: hashPassword,
            address: address
            })
            res.send({
                message: `Selamat ${nama_user} anda berhasil registrasi`
            })
        return new Response (res, 200, Register)
    }
    }   

    catch(error) {
        next(error)
        res.send({
            message: 'Register tidak berhasil'
        })
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk cek data user by id_user
async loginUser (req, res, next) {
        try {
            const {id,email} = req.body
            const checkUser = await User.findOne({
                where: {
                    email 
                }
                // // attribute adalah key untuk query data yang dicari ( select user by 'id_user' )
                // attribute: ['id_user']  
            })

            if(!checkUser){
                res.send({
                message: `Email ${email} tidak terdaftar !!`
            })
            }
            
            if(checkUser){
            const checkPassword = bcrypt.compareSync( req.body.password , User.password )
            res.send( { 
                data: checkPassword , 
                dataEmail : checkUser
        })

            // if(checkPassword){
            //     console.log(checkPassword)
            //     // res.send({
            //     //     message: "berhasil Login"
            //     // })
            // }
            // if(!checkPassword){
            //     console.log(checkPassword)
            //     res.send({
            //         message: "Password tidak sesuai"
            //     })
            // }
        }}
        catch(error){
            next(error)
        }} 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk buat pesanan ( qty belum berkurang otomatis)
async createCart (req, res, next) {
    try {
        const {id,email,nama_item, qty_item } = req.body
        const checkUser = await User.findOne({
            where: {
                email 
            }
        })
        // works
        if(!checkUser){
            res.send({
            message: `Email ${email} tidak terdaftar silahkan registrasi terlebih dahulu !!`
        })
        }

        if(checkUser){
        const CheckItem = await Item.findOne({
        where: { nama_item }
            })

        if(!CheckItem){
            res.send({
                message: `nama item ${nama_item} tidak ada ! ! `
            })
            }

        if(CheckItem){
            
            const saveCart = await Cart.create({
                id_user: checkUser.id_user,
                id_item: CheckItem.id_item,
                status_cart: "pending",
                qty_item: qty_item,
                total_harga : (CheckItem.harga * qty_item)
                })
                const message = "Cart berhasil disimpan !"
                return new Response (res, 200, saveCart , message )
                

            }
        }
        
    }
    catch(error){
        next(error)
    }} 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

async createOrder (req, res, next) {
    try {
        const {email ,id_cart , nama_item  } = req.body
        const checkCart = await Cart.findOne({
            where: {
                id_cart 
            }
        })
        // works
        if(!checkCart){
            res.send({
            message: `Cart tidak tersedia ! ! `
        })
        }
        
        if(checkCart){
        const checkUser = await User.findOne({
                where: { email }
                    })
        // works
        if(!checkUser){
            res.send({
                message: `email ${email} tidak ada ! ! `
            })
            }

        if(checkUser){

            const checkItem = await Item.findOne({
            where: {
                nama_item 
                }
            })

        if(!checkItem){

        res.send({
        message: `item  ${nama_item} tidak ada ! ! `
            })
            
        }

        if(checkItem){

            const saveCart = await Order.create({
                id_cart: id_cart,
                id_user: checkUser.id_user,
                code_payment: "waiting payment",
                order_status: "waiting Payment"
                })
            
        if(saveCart){
            const updateStatusCart = await Cart.update ({status_cart: "Diproses"}, {
                where: {
                    id_cart: id_cart
                }
            })
        }

        const message = "Order berhasil dibuat silahkan lanjut pembayaran"
        return new Response (res, 200, saveCart , message )
    }
}

    }
        
    }
    catch(error){
        next(error)
    }} 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

}

module.exports = {
    BingleShopController
}