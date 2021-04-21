const Sequelize = require('sequelize')
const db = require('../database/database')

module.exports = db.define('student', {
    name: Sequelize.STRING,
    majors: Sequelize.STRING,
    hobby: Sequelize.STRING
}, 
{
    timestamps: false
})