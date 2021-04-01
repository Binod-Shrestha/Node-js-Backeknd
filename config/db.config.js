'use strict'
const mysql = require('mysql');

// create mysql connection

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'B1n0d***',
    database: 'contacts_db'

});

connection.connect(function(err){
    if(err) throw err;
    console.log("Database connection successful");
});


module.exports = connection;
