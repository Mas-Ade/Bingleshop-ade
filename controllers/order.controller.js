// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Order, Item, Cart , User } = require('../database/models')

// Class Order
class OrderController {

// method untuk akses data order
    async getOrder(req, res, next) {
        try{
        const dataItem = await Order.findAll({
            attributes: ['id_order', 'id_cart','id_user', 'code_payment'],
            include: [Item,User,Cart]
            
        })
        return new Response(res,200,dataItem)
        }
        catch(error){
            next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one
    
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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk cek data order by id
    async findOrderbyId (req, res, next) {
        try{
            const id = req.params.id
            const findItem = await Order.findOne({where:{id_order: id},
                include: {model: User,
                attributes: [
                    'nama_user'
                ]}})
        return new Response(res, 200, findItem)
    } 
        catch(error) {
            next(error)
        } 
        }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

//  method untuk delet order
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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one


module.exports = {
    OrderController
}