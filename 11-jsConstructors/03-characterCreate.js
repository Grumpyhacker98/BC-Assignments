function New(name, profession, gender, age, health, strength) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.health = health;
    this.strength = strength
    this.alive = true;
    this.printStats = function() {
        console.log("Name: " + this.name)
        console.log("Profession: " + this.profession)
        console.log("Gender: " + this.gender)
        console.log("Age: " + this.age)
        console.log("Health: " + this.health)
        console.log("Living?: " + this.alive)
    }
    this.isAlive = function(){
        if(this.health > 1){
            console.log(this.name+" is not Dead!")
        }else{
            console.log(this.name+" is a Goner!")
            this.alive = false
        }
    }
    this.levelUp = function(){
        this.age++;
        this.strength = this.strength + 5;
        this.health = this.health + 25;
        console.log("New age: "+this.age)
        console.log("New HP: "+this.health)
        console.log("New strength: "+this.strength)
    }
    this.attack = function(plyr2){
        plyr2.health -= this.strength
        plyr2.isAlive()
        this.isAlive()
    }
}

var thor = new New("Thor", "God", "male", 500, 100, 100)
var ironMan = new New("Iron Man", "billionaire,playboy,philanthropist", "male", 35, 40, 50)


thor.printStats()
ironMan.printStats()


thor.levelUp()

ironMan.attack(thor)
