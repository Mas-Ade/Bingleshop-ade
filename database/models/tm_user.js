'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tm_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tm_users.hasMany (model.Tb_item,{foreignKey:'id_user'}),
      Tm_users.hasMany (model.Tb_cart,{foreignKey:'id_user'}),
      Tm_users.hasMany (model.Tb_order,{foreignKey:'id_user'}),
      Tm_users.hasMany (model.Tb_status_order,{foreignKey:'id_user'})
    }
  }

  Tm_users.init({
    id_user: DataTypes.INTEGER,
    nama_user: DataTypes.STRING,
    noreg_user: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    no_telp: DataTypes.INTEGER
  
  }, {
    sequelize,
    modelName: 'tm_users',
  });
  return Tm_users;
};