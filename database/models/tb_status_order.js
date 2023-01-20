'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_status_order extends Model {
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
    id_status_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_status_order',
  });
  return tb_status_order;
};