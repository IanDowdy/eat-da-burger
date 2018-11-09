var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "!Mishk@25>6qh9a4j",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("conneted as id " + connection.threadId);
});

module.exports = connection;