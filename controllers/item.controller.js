// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")

// import Product class dari model dari index.js model
const { Product } = require('../database/models')

class ItemsController {
    // SEND GET REQUEST TO HTTP
    async getItems(req, res, next) {
        // const { page = '1', limit = '3'} = req.query
        // const pageInt = Number(page)
        // const limitInt = Number(limit)
        // const offset = (pageInt - 1) * limitInt

        const data = await Product.findAll({
            attributes: ['id', 'name', 'price', 'stock', 'sku'],
            limit: limitInt,
            offset: offset
        })

        return new Response(res, 200, data)
    }
    
    //
    insertItem(req, res, next) {
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
    ItemsController
}