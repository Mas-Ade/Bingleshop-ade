// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Cart } = require('../database/models')


class CartController {
    // SEND GET REQUEST to see data table in tm_user
    async getCart(req, res) {

        const dataCart = await Cart.findAll({
            attributes: ['id_cart', 'id_user', 'id_item', 'total_item', 'total_harga']
        })
            return new Response(res,200,dataCart)
    }
    
    insertCart (req, res) {
        try {
            const createItem = Cart.create({
                id_item: req.body.id_item,
                total_item: req.body.total_item,
                total_harga: req.body.total_harga
            }).then((result) => {
                res.status(200).json({
                    message: "pesanan sudah masuk list keranjang anda !! ",
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

        findCartbyId (req, res) {

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

    deleteCart(res,req) {

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
    CartController
}