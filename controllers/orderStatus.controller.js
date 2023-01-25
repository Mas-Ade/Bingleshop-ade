// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { StatusOrder } = require('../database/models')
const { registerSchema } = require('../validations/schema/register.schema')
const { validate } = require("../middlewares/validation")
const bcrypt = require ('bcrypt')


class StatusOrderController {
    // SEND GET REQUEST to see data table in tm_user
    async getStatusOrder(req, res,next) {
        try{
        const dataStatus = await StatusOrder.findAll({
            attributes: ['id_status_order', 'id_order', 'id_user', 'payment_status', 'delivery_date','received_Date'],
            
        })
            return new Response(res,200,dataStatus)
        }catch(error) {
            next(error)
        }
    }
    
    
    async insertStatusOrder (req, res) {
        try {
            const createItem = await StatusOrder.create({
                id_order: req.body.id_order,
                id_user: req.body.id_user,
                payment_status: req.body.payment_status,
                delivery_date: req.body.stock,
                receive_date: req.body.stock,
            })
        } catch(error) {
        next(error)
        }
    }

        findItembyId (req, res) {

            const id = req.params.id_item
            createUser = User.findByPk(id)
            .then((result) => {
                res.status(200).json({
                    
                    data: result
                })
            }).catch((error) => {
                res.status(500).json({
                    message: error.message

                })
            })
        } 

    deleteItem(res,req) {

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