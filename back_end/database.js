const mysql = require('mysql')

module.exports.connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port:process.env.DB_PORT,
        user: process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.MYSQL_DB,
    }
)