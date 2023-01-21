const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Tb_carts extends Model {
}

Tb_carts.init(
  {
    id_cart: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "tb_items",
          key: "id_item",
          as: "id_item"
        }
      },
      total_item: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_harga: {
        type: Sequelize.DOUBLE,
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

module.exports = Tb_carts