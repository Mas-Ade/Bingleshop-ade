const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class tb_orders extends Model {
}

tb_orders.init(
  {
    id_status_order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references : {
        model: "tb_orders",
        key: "id_order",
        as: "id_order"
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references : {
        model: "tm_users",
        key: "id_user",
        as: "id_user"
      }
    },
    payment_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    received_date: {
      type: DataTypes.DATE,
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