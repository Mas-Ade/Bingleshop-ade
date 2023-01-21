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
      type: Sequelize.INTEGER
    },
    id_order: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references : {
        model: "tb_orders",
        key: "id_order",
        as: "id_order"
      }
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references : {
        model: "tm_users",
        key: "id_user",
        as: "id_user"
      }
    },
    payment_status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    delivery_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    received_date: {
      type: Sequelize.DATE,
      allowNull: false
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