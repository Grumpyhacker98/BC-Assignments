
const axios = require('axios');
const fs = require('fs');


var TV = function () {
  this.findShow = function (show) {

    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL)
      .then(function (response) {
        newNest = [
          "name: " + response.data.name,
          "genre: " + response.data.name,
          "rating: " + response.data.rating.average,
          "network: " + response.data.network.name,
          "summary: " + response.data.summary
        ]
        console.log(newNest)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        newAppend = JSON.stringify(newNest)
        fs.appendFile('log.txt', newAppend, function (err) {
          if (err) throw err;
          console.log('Saved to log.txt');
        });

      });
  };

  this.findActor = function (actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL)
      .then(function (response) {
        newArray = []
        console.log("================================")
        for (var i = 0; i < response.data.length; i++) {
          newNest = [
            "name: " + response.data[i].person.name,
            "birthday: " + response.data[i].person.name,
            "gender: " + response.data[i].person.gender,
            "country: " + response.data[i].person.country,
            "url: " + response.data[i].person.url
          ].join("\n\n")
          t = i + 1
          console.log("Actor: " + t)
          console.log(newNest)
          console.log("================================")
          newArray.push(newNest)
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    .finally(function () {
      newAppend = JSON.stringify(newArray)
      fs.appendFile('log.txt', newArray, function (err) {
        if (err) throw err;
        console.log('Saved to log.txt');
      });

    });
  };

};

module.exports = TV;

