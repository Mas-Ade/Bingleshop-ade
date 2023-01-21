const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Tb_items extends Model {
}

Tb_items.init(
  {
    id_item: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'id_user'
    },
    code_item: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nama_item: {
      type: Sequelize.STRING,
      allowNull: true
    },
    harga: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    stock: {
      type: Sequelize.INTEGER,
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

module.exports = Tb_items