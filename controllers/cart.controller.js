// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Cart } = require('../database/models')

// Class Cart
class CartController {

// method untuk akses lihat semua data Item
    async getCart(req, res, next) {
        try{
                const dataCart = await Cart.findAll({
                attributes: ['id_cart', 'id_user', 'id_item', 'status_cart', 'total_item', 'total_harga']
        })
        return new Response(res,200,dataCart)
        }
        catch(error){
        next(error)
        }}

// method untuk menambah data cart
    async insertCart (req, res, next) {
        try {
            const createCart = await Cart.create({
                id_user: req.body.id_user,
                id_item: req.body.id_item,
                status_cart: req.body.status_cart,
                total_item: req.body.total_item,
                total_harga: req.body.total_harga
            })
        return new Response(res,200, createCart)
        }
        catch(error) {
        next(error)
        }}
// method untuk akses lihat data cart by Id
    async findCartbyId (req, res, next) {
        try{
            const id = req.params.id_cart
            const findCart = await Cart.findOne(id)
            return new Response(res,200, findCart)
            }
            catch(error){
            next(error)
            }
        }
        
// method untuk delete id_cart by Id
    async deleteCart(res,req, next) {

            const id = req.body.id_cart
            const deleteCartbyId = User.destroy({where: {id_user: 6}}).then((result) => {
            return new Response (res,200, de)
        })
    }catch(error){
        next(error)
    }

    }


module.exports = {
    CartController
}