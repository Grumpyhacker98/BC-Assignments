dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function(){
        console.log(this.noise)
    }
}

cats = {
    raining: false,
    noise: "meow",
    makeNoise: function(){
        console.log(this.noise)
    }
}

console.log(dogs.makeNoise())
console.log(cats.makeNoise())

massHysteria()

function massHysteria(){
    if(cats.raining&&dogs.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }else{
        console.log('alls calm')
    }
}