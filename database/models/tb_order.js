'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tb_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tb_cart.hasOne (model.Tb_status_order,{foreignKey:'id_order'})
    }
  }
  Tb_order.init({
    id_order: DataTypes.INTEGER,
    id_cart: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_cart: DataTypes.INTEGER,
    total_item: DataTypes.INTEGER,
    total_harga: DataTypes.DOUBLE,
    code_payment: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'tb_orders',
  });
  return Tb_order;
};