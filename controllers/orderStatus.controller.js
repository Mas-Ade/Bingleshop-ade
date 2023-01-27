// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { StatusOrder, Order, User } = require('../database/models')


class StatusOrderController {
    // SEND GET REQUEST to see data table in tm_user
    async getStatusOrder(req, res,next) {
        try{
        const dataStatus = await StatusOrder.findAll({
            attributes: ['id_status_order', 'id_order', 'id_user', 'payment_status', 'delivery_date','received_Date'],
            include:[User,Order]
        })
            return new Response(res,200,dataStatus)
        }catch(error) {
            next()
        }
    }
    
    async insertStatusOrder (req, res, next) {
        try {
            const createStatus = await StatusOrder.create({
                id_order: req.body.id_order,
                id_user: req.body.id_user,
                payment_status: req.body.payment_status
            })
            return new Response(res,200,createStatus)
        } catch(error) {
        next(error)
        }
    }

        findStatusOrderbyId (req, res, next) {
            try{

            const id = req.params.id_status_order

            findStatus = StatusOrder.findOne(id)
            return new Response (res ,200, findStatus)
            
        } catch(error){
            next(error)
        }
            
        } 

    deleteStatusOrder(res,req, next) {

        const id = User.req.body
        deleteUserbyId = User.destroy({where: {id_user: 6}}).then((result) => {
            res.status(200).json({
                message: `berhasil menghapus data id dari ${id_user}`
            })
        }).catch((err) => {
            res.status(500).json({
                message: err.message
            })
        })
    }
    }


module.exports = {
    StatusOrderController
}