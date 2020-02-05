var objects = require("./band.js");

console.log(objects)


// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(`${key} : ${obj[key]}`)
//     }
// }

// const object = data

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for (var property in object) {
//     if (object.hasOwnProperty(property)) {
//       // Do things here
//         console.log("")
//     }
//   }

for(object in objects){
    console.log(object+objects[object])
}