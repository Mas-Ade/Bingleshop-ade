// import class Tm_users
const User = require('./tm_users')
// import class Tb_items
const Item = require('./tb_items')
// import class Tb_cart
const Cart = require('./tb_carts')
// import class Tb_order
const Order = require('./tb_orders')
// import class Tb_status_order
const StatusOrder = require('./tb_status_orders')
// import sequilize module
const sequelize = require('./sequelize')


Item.hasMany(User,{
  foreignKey: 'id_user',
})

User.belongsTo(Item,{
    foreignKey: 'id_user',
})

 // export module user,product dan sequelize
module.exports = {
  User,
  Item,
  Cart,
  Order,
  StatusOrder,
  sequelize
}