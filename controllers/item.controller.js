// import Response Error API
const ErrorResponse = require("../helpers/error.helper")
// import Response OK  API
const Response = require("../helpers/response.helper")
// import Product class dari model dari index.js modely
const { Item , User } = require('../database/models')


// Class Item
class ItemController {

// method untuk akses lihat semua data Item
    async getItem(req, res, next) {
        try{
            const dataItem = await Item.findAll({
            attributes: ['id_item', 'id_user', 'code_item', 'nama_item', 'harga','stock'],
            include: User // table databse yang terlelasi
        })
        return new Response(res,200,dataItem)
        }
        catch(error){
        next(error)
        }}
        
// method untuk akses Insert data item(admin)/ buat pesanan(user)
    async insertItem (req, res, next) {
        try {
            const createItem = await Item.create({
                id_user: req.body.id_user,
                code_item: req.body.code_item,
                nama_item: req.body.nama_item,
                harga: req.body.harga,
                stock: req.body.stock,
            })
            return new Response(res, 200, createItem)
        } catch(error) {
        next(error)
        }}

// method untuk akses data item by Id
    async findItembyId (req, res, next) {
        try{
                const id = req.body.id_item
                const findItem = await Item.findOne(id)
            return new Response(res, 200, findItem)
        } 
        catch(error) {
            next(error)
        }}

// method untuk delete data item by Id        
    async deleteItem(res, req, next) {
        try{
                const id = req.body.id_item
                const deleteUserbyId = User.destroy({where: {id_user: 6}})
            return new Response(res, 200, deleteUserbyId )
    }
    catch(error){
        next(error)
    }}


    }


module.exports = {
    ItemController
}