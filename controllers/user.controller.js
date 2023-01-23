// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { User } = require('../database/models')



class UserController {
    // SEND GET REQUEST to see data table in tm_user
    async getUser(req, res) {

        const dataUser = await User.findAll({
            attributes: ['id_user', 'nama_user', 'noreg_user', 'password', 'email','address','no_telp'],
            // limit: limitInt,
            // offset: offset
        })
        return new Response(res, 200, dataUser)
    }
    
    insertUser (req, res) {
            createUser = User.create({
                nama_user: req.body.nama_user,
                noreg_user: req.body.noreg_user,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                no_telp: req.body.no_telp  
            })
            .then((result) => {
                res.status(200).json({
                    data: result,
                    message: "Registrasi berhasil"
                })
            }).catch((error) => {
                res.status(500).json({
                    message: error.message

                })
            })
        } 

        findUserbyId (req, res) {
            const id= req.param.id_user
            createUser = User.findByPk(id)
            .then((result) => {
                res.status(200).json({
                    
                    message: `penacarian data dari ${id}`,
                    data: result
                })
            }).catch((error) => {
                res.status(500).json({
                    message: error.message

                })
            })
        } 

    deleteUser(res,req) {

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
    UserController
}