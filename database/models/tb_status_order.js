'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tb_status_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_status_order.init({
    id_status_order: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    payment_status: DataTypes.BOOLEAN,
    delivery_date: DataTypes.DATE,
    received_date: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'tb_status_orders',
  });
  return Tb_status_order;
};