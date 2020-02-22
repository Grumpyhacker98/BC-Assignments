var mysql = require("mysql");

var searchTerm = process.argv[2]
var temp = String(searchTerm)
var searchTHIS = "SELECT * FROM `playlist` WHERE `genre` = '" + temp + "'"

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    if (searchTerm) {
        console.log(searchTerm)
        selectSearch();
    } else {
        console.log("full search")
        afterConnection()
    }
});

function afterConnection() {
    connection.query("SELECT * FROM playlist", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

function selectSearch() {
    connection.query(searchTHIS, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}