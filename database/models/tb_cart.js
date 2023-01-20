'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tb_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tb_cart.hasOne (model.Tb_order,{foreignKey:'id_cart'})
      
    }
  }
  tb_cart.init({
    id_cart: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_item: DataTypes.INTEGER,
    total_item: DataTypes.INTEGER,
    total_harga: DataTypes.DOUBLE,


  }, {
    sequelize,
    modelName: 'tb_carts',
  });
  return Tb_cart;
};