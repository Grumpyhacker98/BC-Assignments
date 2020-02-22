
var mysql = require("mysql");

var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "auction_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Place a bid", "Place an auction"],
            name: "choice"
        }
    ]).then(function (response) {
        // place an item function
        // bid on an item function
        console.log(response.choice)
        if (response.choice === "Place a bid") {
            bidAuction()
        } else {
            placeAuction()
        }
    });
});

function placeAuction() {
    inquirer.prompt([
        {
            type: "input",
            message: "What do you want to action?",
            name: "name"
        }, {
            type: "input",
            message: "How much is it worth?",
            name: "value"
        }
    ]).then(function (response) {
        auctionPrice = Number(response.value)
        connection.query("INSERT INTO auction SET ?",
            [
                {
                    title: response.name,
                    price: auctionPrice
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " products updated!\n");
            }
        );

        connection.query("SELECT * FROM auction", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
        });    

    });
}

function bidAuction() {

    connection.query("SELECT * FROM auction", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });


    inquirer.prompt([
        {
            type: "input",
            message: "What item(ID) do you want to bid on?",
            name: "choice"
        },
    ]).then(function (response) {
        connection.query("UPDATE auction SET ? WHERE ?",
            [
                {
                    quantity: 100
                },
                {
                    flavor: "Rocky Road"
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " products updated!\n");
            }
        );
    });
}
// ([
//     // Here we create a basic text prompt.
//     {
//         type: "input",
//         message: "What is your name?",
//         name: "username"
//     },
//     // Here we create a basic password-protected text prompt.
//     {
//         type: "password",
//         message: "Set your password",
//         name: "password"
//     },
//     // Here we give the user a list to choose from.
//     {
//         type: "list",
//         message: "Which Pokemon do you choose?",
//         choices: ["Bulbasaur", "Squirtle", "Charmander"],
//         name: "pokemon"
//     },
//     // Here we ask the user to confirm.
//     {
//         type: "confirm",
//         message: "Are you sure:",
//         name: "confirm",
//         default: true
//     }
// ])