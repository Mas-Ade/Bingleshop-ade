// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { User } = require('../database/models')



class UserController {
    // SEND GET REQUEST to see data table in tm_user
    async getUser(req, res, next) {

        const dataUser = await User.findAll({
            attributes: ['id_user', 'nama_user', 'noreg_user', 'password', 'email','address','no_telp'],
            // limit: limitInt,
            // offset: offset
        })
        return new Response(res, 200, dataUser)
    }
    
    //
    insertUser (req, res, next) {
        try {
            // console.log(req.body)       // request body
            // console.log(req.params)     // request url params
            // console.log(req.query)      // request query param
            // console.log(req.headers)    // request header
        
            // logic insert ke db

            const data = {
                item_id: 10,
                item_name: req.body.item_name
            }
        
            return new Response(res, 201, data)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = {
    UserController
}