
//Dependencies
var mysql = require('mysql');

//Checks if JawsDB on heroku platform is present, if not uses local development environment database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "kbvol2",
        database : "burger_db"
    });
};

module.exports = connection;


