// import dotenv module
const dotenv = require('dotenv')
// import config file dari .env
dotenv.config({path: '.env'})

// export mmodule 
module.exports = {
  username: process.env.DB_USER,
  password: parseInt(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: parseInt(process.env.DB_PORT, 10),
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
}