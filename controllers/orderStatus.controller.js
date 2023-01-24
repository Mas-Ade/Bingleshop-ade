// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { StatusOrder } = require('../database/models')


class StatusOrderController {
    // SEND GET REQUEST to see data table in tm_user
    async getItem(req, res,next) {
        try{
        const dataItem = await Item.findAll({
            attributes: ['id_status_order', 'id_order', 'id_user', 'payment_status', 'delivery_date','received_Date'],
            include: 'tm_users'
        })
            return new Response(res,200,dataItem)
        }catch(error) {
            next(error)
        }
    }
    
    insertItem (req, res) {
        try {
            const createItem = Item.create({
                code_item: req.body.code_item,
                nama_item: req.body.nama_item,
                harga: req.body.harga,
                stock: req.body.stock,
            }).then((result) => {
                res.status(200).json({
                    message: "menu risol berhasil diinput !!",
                    data: result
                }).catch((err)=> {
                    res.status(500).json({
                        message: err.message
                    })
                })
            })
           
        } catch(err) {
        return new ErrorResponse(res,500, err)
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