var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "top_songsDB"
});

var searchQuery = process.argv[2]
var searchTerm = process.argv[3]

artist = "SELECT * FROM top5000 WHERE `artist` = '" + searchTerm + "'"
sucess = "SELECT artist, COUNT(artist) FROM top5000 GROUP BY artist HAVING COUNT(artist) > 1 ORDER BY Count(artist) DESC"
range = "SELECT * FROM top5000 WHERE `position` = '" + searchTerm + "'"
song = "SELECT * FROM top5000 WHERE `song` = '" + searchTerm + "'"

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    switch (searchQuery) {
        case "artist":
            artistQuery()
            break;
        case "sucess":
            sucessQuery()
            break;
        case "range":
            rangeQuery()
            break;
        case "song":
            songQuery()
            break;
    }
});

// * A query which returns all data for songs sung by a specific artist
function artistQuery() {
    connection.query(artist, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
// * A query which returns all artists who appear within the top 5000 more than once
function sucessQuery() {
    connection.query(sucess, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
// * A query which returns all data contained within a specific range
function rangeQuery() {
    connection.query(range, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
// * A query which searches for a specific song in the top 5000 and returns the data for it
function songQuery() {
    connection.query(song, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
