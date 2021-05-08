const mysql = require('mysql')

/**
 * Create a connection with database in MySql
 */
const connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'root',
  password : '',
  database : 'nodepet'
})

module.exports = connection;