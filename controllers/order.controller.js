// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Order } = require('../database/models')

// Class Order
class OrderController {

// method untuk akses data order
    async getOrder(req, res, next) {
        try{
        const dataItem = await Order.findAll({
            attributes: ['id_order', 'id_cart','id_user', 'code_payment'],
            
        })
        return new Response(res,200,dataItem)
        }
        catch(error){
            next(error)
        }}
    
// method untuk create data order
    async insertOrder (req, res, next) {
        try {
            const createOrder = await Order.create({
                id_cart: req.body.id_cart,
                id_user: req.body.id_user,
                code_payment: req.body.code_payment,
            })
        return new Response(res, 200, createOrder )
        } 
        catch(error) {
            next(error)
        }
    }

// method untuk create data order
    async findOrderbyId (req, res, next) {
        try{
            const id = req.body.id_order
            const findItem = await Order.findOne(id)
        return new Response(res, 200, findItem)
    } 
        catch(error) {
            next(error)
        } 
        }

    async deleteOrder(res,req, next) {
        try{

            const id = req.body.id_order
            deleteUserbyId = await User.destroy({where: {id_order: 6}})
        return new Response(res, 200, deleteUserbyId)
        }
        catch(error){
            next(error)
        }
    }
    }


module.exports = {
    OrderController
}