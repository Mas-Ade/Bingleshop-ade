// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Item } = require('../database/models')


class ItemController {
    // SEND GET REQUEST to see data table in tm_user
    async getItem(req, res) {

        const dataItem = await Item.findAll({
            attributes: ['id_item', 'id_user', 'code_item', 'nama_item', 'harga','stock'],
        })
            return new Response(res,200,dataItem)
    }
    
    insertItem (req, res) {
        try {
            const createItem = Item.create({
                code_item: req.body.code_item,
                nama_item: req.body.nama_item,
                harga: req.body.harga,
                stock: req.body.stock,
            })
            return new Response(res,200,this.insertItem)  
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
    ItemController
}