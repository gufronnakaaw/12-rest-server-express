const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
})

db.connect((err) => {
    if(err) throw err
    console.log('database connected successfully!')
})

module.exports = db