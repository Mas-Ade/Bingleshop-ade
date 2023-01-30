// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Cart, User, Item } = require('../database/models')

// Class Cart
class CartController {

// method untuk akses lihat semua data Item
    async getCart(req, res, next) {
        try{
                const dataCart = await Cart.findAll({
                attributes: ['id_cart', 'id_user', 'id_item', 'status_cart', 'qty_item', 'total_harga'],
                include: {model: Item,
                attributes:[
                    'id_item',
                    'nama_item'
                ]}
        })
        return new Response(res,200,dataCart)
        }
        catch(error){
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one method

// method untuk menambah data cart
    async insertCart (req, res, next) {
        try {

            const createCart = await Cart.create({
                id_user: req.body.id_user,
                id_item: req.body.id_item,
                status_cart: req.body.status_cart,
                qty_item: req.body.qty_item,
                total_harga: req.body.total_harga
            })
        return new Response(res,200, createCart)
        }
        catch(error) {
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one
        
// method untuk akses lihat data cart by Id
    async findCartbyId (req, res, next) {
        try{
            const id = req.params.id
            const findCart = await Cart.findOne({where:{id_cart: id},
                include: {model: User,
                attributes: [
                    'nama_user'
                ]}})
            return new Response(res,200, findCart)
            }
            catch(error){
            next(error)
            }
        }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one
        
    }


module.exports = {
    CartController
}