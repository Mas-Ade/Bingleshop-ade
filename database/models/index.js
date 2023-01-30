// import class Tm_users
const User = require('./tm_users')
// import class Tb_items
const Item = require('./tb_items')
// import class Tb_cart
const Cart = require('./tb_carts')
// import class Tb_order
const Order = require('./tb_orders')

// import sequilize module
const sequelize = require('./sequelize')

// works Item to user
Item.belongsTo(User,{
  foreignKey: 'id_user',
})

// works user to item
User.hasMany(Item,{
  foreignKey: 'id_user',
})

// works item to cart
Cart.belongsTo(Item,{
  foreignKey: 'id_item'
})

// works user to cart
Cart.hasOne(User,{
  foreignKey: 'id_user'
})

// works User to order
Order.belongsTo(User,{
  foreignKey: 'id_user'
})

// works item to order
Order.hasOne(Item,{
  foreignKey: 'id_item'
})

// work cart to order
Order.hasOne(Cart,{
  foreignKey: 'id_cart'
})

// // works user to status order
// User.hasMany(StatusOrder,{
//   foreignKey: 'id_user'
// })

// // works status order to user
// StatusOrder.belongsTo(User,{
//   foreignKey: 'id_user'
// })

// StatusOrder.hasOne(Order,{
//   foreignKey: 'id_order'
// })





 // export module user,product dan sequelize
module.exports = {
  User,
  Item,
  Cart,
  Order,
  sequelize
}