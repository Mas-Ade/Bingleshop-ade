const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class tb_orders extends Model {
}

tb_orders.init(
  {
    id_order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_cart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "id_cart"
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "id_user"
    },
    code_payment: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  },
)

module.exports = tb_orders