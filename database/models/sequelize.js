// import class module Sequelize
const { Sequelize } = require('sequelize')
//import config
const config = require('../../config/config.database')

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    define: {
        underscored: true,
    }
})

module.exports = sequelize