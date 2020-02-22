
var inquirer = require("inquirer");

function newPlayer(name, offense, defense) {
    this.name = name
    this.offense = offense
    this.defense = defense
    this.goodGame = function () {
        skillUp = Math.floor(Math.random() * Math.floor(2))
        if (skillUp === 0) {
            this.defense = this.defense + 5
            console.log(this.name+"'s defense has grown 5")
        }
        if (skillUp === 1) {
            this.offense = this.offense + 5
            console.log(this.name+"'s offense has grown 5")
        }
    }
    this.badGame = function () {
        skillUp = Math.floor(Math.random() * Math.floor(2))
        if (skillUp === 0) {
            this.defense = this.defense - 5
            console.log(this.name+"'s defense has shrunk 5")
        }
        if (skillUp === 1) {
            this.offense = this.offense - 5
            console.log(this.name+"'s offense has shrunk 5")
        }
    }
    this.printStats = function () {
        console.log(this)
    }
}

var teamScore = 0
var gameCount = 0
var playerCount = 1
var playerArray = []

function collectPlayer() {
    if (playerCount < 4) {
        if (playerCount < 3) {
            console.log("Player: " + playerCount)
        } else {
            console.log("Substitute player:")
        }
        inquirer.prompt([
            {
                name: "name",
                message: "What is this players name?"
            },{
                name: "offense",
                message: "Offensive capability?"
            }, {
                name: "defense",
                message: "Defensive capability?"
            }
        ]).then(function (answers) {

            var freshMeat = new newPlayer(
                answers.name,
                answers.offense,
                answers.defense
            );

            playerArray.push(freshMeat);

            playerCount++;

            collectPlayer()

        });
    } else {
        playGame()
    }
}

function playGame() {
    if (gameCount < 5) {
        numb1 = Math.floor(Math.random() * Math.floor(20) + 1)
        numb2 = Math.floor(Math.random() * Math.floor(20) + 1)

        teamOffense = Number(playerArray[0].offense) + Number(playerArray[1].offense)
        teamDefense = Number(playerArray[0].defense) + Number(playerArray[1].defense)

        console.log("=======================================")

        console.log("Offensive Capability: "+teamOffense)
        console.log("Enemy offensive value: "+numb1)
        if (numb1 < teamOffense) {
            teamScore++
            console.log("Offensive win!")
        }else{
            console.log("Failed offensive")
        }

        console.log("=======================================")

        console.log("Defensive Capability: "+teamDefense)
        console.log("Enemy defensive value: "+numb2)
        if (numb2 > teamDefense) {
            teamScore--
            console.log("Defensive loss")
        }else{
            console.log("Sucessful defensive")
        }

        console.log("=======================================")
        console.log("Current Score: "+teamScore)
        console.log("=======================================")

        // this prevents it from asking the very final time for no reason
        if(gameCount<4){
            inquirer.prompt([
                {
                    type: "list",
                    message: "Substitute a player with the benchwarmer?",
                    choices: ["no", "sub player 1", "sub player 2"],
                    name: "sub"
                }
            ])
            .then(function (swap) {
                if(swap.sub==="no"){
                    console.log("the original players will remain")
                    console.log("Player1: "+playerArray[0].name+"   O: "+playerArray[0].offense+"   D: "+playerArray[0].defense)
                    console.log("Player2: "+playerArray[1].name+"   O: "+playerArray[1].offense+"   D: "+playerArray[1].defense)
                    console.log("Substitute: "+playerArray[2].name+"   O: "+playerArray[2].offense+"   D: "+playerArray[2].defense)
                }
                if(swap.sub==="sub player 1"){
                    console.log("Player 1 will be substituted")
                    temp = playerArray[0]
                    playerArray[0] = playerArray[2]
                    playerArray[2] = temp
                    console.log("Player1: "+playerArray[0].name+"   O: "+playerArray[0].offense+"   D: "+playerArray[0].defense)
                    console.log("Player2: "+playerArray[1].name+"   O: "+playerArray[1].offense+"   D: "+playerArray[1].defense)
                    console.log("Substitute: "+playerArray[2].name+"   O: "+playerArray[2].offense+"   D: "+playerArray[2].defense)
                }
                if(swap.sub==="sub player 2"){
                    console.log("Player 2 will be substituted")
                    temp = playerArray[1]
                    playerArray[1] = playerArray[2]
                    playerArray[2] = temp
                    console.log("Player1: "+playerArray[0].name+"   O: "+playerArray[0].offense+"   D: "+playerArray[0].defense)
                    console.log("Player2: "+playerArray[1].name+"   O: "+playerArray[1].offense+"   D: "+playerArray[1].defense)
                    console.log("Substitute: "+playerArray[2].name+"   O: "+playerArray[2].offense+"   D: "+playerArray[2].defense)
                }
                console.log("=======================================")
                gameCount++
                playGame()
            });
        }else{
            gameCount++
            playGame()
        }

    } else {
        if (teamScore > 0) {
            console.log("You Won")
            playerArray[0].goodGame()
            playerArray[1].goodGame()
        }
        if (teamScore < 0) {
            console.log("You Lost")
            playerArray[0].badGame()
            playerArray[1].badGame()
        }
        if(teamScore===0){
            console.log("tied")
        }
    }
}


collectPlayer()