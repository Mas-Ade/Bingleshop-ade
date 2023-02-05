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
        })
        return new Response(res,200,dataItem)
        }
        catch(error){
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one
        
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
            const message = " item berhasil ditambahkan ! "
            return new Response(res, 200, createItem, message)
        } catch(error) {
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk akses data item by Id
    async findItembyId (req, res, next) {
        try{
                const id = req.params.id
                const findItem = await Item.findOne({where:{id_item: id},
                include: {model: User,
                attributes: [
                    'nama_user'
                ]}})
            return new Response(res, 200, findItem)
        } 
        catch(error) {
        next(error)
        }}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk update data item     
async updateStockItem (req, res, next) {
    try{

        const code = req.body.code_item
        const newstock = req.body.stock

        const checkItem = await Item.findOne({
            where: {
                code_item: code
            }
        })

        if(!checkItem){
            res.send(JSON.stringify("id_item tidak ditemukan"))
        }

        if(checkItem){
            res.send (checkItem)
            const updateStock = await Item.update ({stock: newstock}, {
                where: {
                    code_item: code
                }
            })

            const message = " stock berhasil ditambah"
            return new Response(res, 200, updateStock, message )

        }
        
    
        
}
catch(error){
    next(error)
}}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

    }


module.exports = {
    ItemController
}