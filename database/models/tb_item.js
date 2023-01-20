'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tb_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tb_item.hasOne (model.Tb_cart,{foreignKey:'id_item'}),
      Tb_item.belongsTo (model.Tm_users,{foreignKey:'id_item'})
      
    }
  }
  tb_item.init({
    id_item: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    code_item: DataTypes.STRING,
    nama_item: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tb_items',
  });
  return Tb_item;
};