const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Tb_items extends Model {
}

Tb_items.init(
  {
    id_item: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user'
    },
    code_item: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nama_item: {
      type: DataTypes.STRING,
      allowNull: true
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
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