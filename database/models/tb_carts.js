const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Tb_carts extends Model {
}

Tb_carts.init(
  {
    id_cart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      id_item: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references : {
          model: "tb_items",
          key: "id_item",
          as: "id_item"
        }
      },
      total_item: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      total_harga: {
        type: DataTypes.DOUBLE,
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

module.exports = Tb_carts