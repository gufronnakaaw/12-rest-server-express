const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_UNAME, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST
})

module.exports = db