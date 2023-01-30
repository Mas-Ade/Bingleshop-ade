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
            attributes: ['id_status_order', 'id_order', 'id_user', 'payment_status','delivery_date','received_date'],  
            include: [{model: Order, attributes:[
                'id_order' 
            ]}
        ]}
        )
            return new Response(res,200,dataStatus)
        } catch(Error) {
            console.log('ini error 1')
            next(Error)
        }
    }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk insert data status order
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
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method cek data status order by id
    async findStatusOrderbyId (req, res, next) {
            try{
            const id = req.params.id

            const findStatus = await StatusOrder.findOne({where:{id_status_order: id},
                include: {model: User,
                attributes: [
                    'nama_user'
                ]}})
            return new Response (res ,200, findStatus)
            
        } catch(error){
            next(error)
        }
            
        } 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

// method untuk cek data order by id
async updateOrder (req, res, next) {
    try{
        const {id_status_order,status_payment} = req.body

        const updateStatus = await Order.update({status_payment : status_payment },{where: {id_status_order : id_status_order}})
        return new Response(res, 200, updateStatus)
    
    } 
    catch(error) {
        next(error)
    } 
    }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = end of one

    async deleteStatusOrder(res,req, next) {

        const id = await User.req.body
        deleteUserbyId = await User.destroy({where: {id_user: 6}}).then((result) => {
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