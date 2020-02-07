
var fs = require("fs");

var command = process.argv[2];
var transaction = parseFloat(process.argv[3])

function transactionAppend(text) {
    fs.appendFile("bank.txt", text, function (err) {

        if (err) {
            console.log(err);
        }

        else {
            console.log("appended new transaction");
            console.log("total: " + newtotal + "$")
        }

    });
}

fs.readFile("bank.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    var dataArr = data.split(",")

    total = 0
    for (var i = 0; i < dataArr.length; i++) {
        add = parseFloat(dataArr[i])
        total = total + add
    }

    if (command === "total") {
        console.log("total: " + total + "$")
    }
    if (command === "deposit") {
        newtotal = total + transaction
        console.log("you deposited " + transaction + "$")
        transactionAppend(", " + transaction)
    }
    if (command === "withdraw") {
        newtotal = total - transaction
        console.log("you withdrew " + transaction + "$")
        transactionAppend(", -" + transaction)
    }
    if (command === "lotto") {
        total = total - 5
        console.log("5$ charge")
        attempt = Math.floor((Math.random() * 10) + 1);
        if (attempt === 5) {
            newtotal = total + 50
            console.log("you won 50$!")
            transactionAppend(", 50")
        } else {
            newtotal = total
            console.log("you lost!")
            transactionAppend(", -5")
        }
    }
    

});
