require("dotenv").config();
const keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var Moment = require("moment");
var inquirer = require("inquirer");
var spotify = new Spotify(keys.spotify);

inquirer
    .prompt([

        {
            type: 'list',
            message: 'Choose an search engine!',
            choices: ['spotify', 'movie-search', 'concert-search'],
            name: 'searchEngine'

        }
    ])

    .then(function (inquirerResponse) {
        if (inquirerResponse.searchEngine === 'spotify') {
            inquirer
                .prompt([

                    {
                        type: 'input',
                        message: 'Enter a song name',
                        name: 'name'
                    }
                ])
            
                .then(function (trackName) {
                    if (trackName === undefined) {
                        trackName === 'All Too Well'
                    }
                    console.log(trackName.name);
                    
                    spotify
                        .search({ type: 'track', query: trackName.name })
                        .then(function (response) {
                            console.log(response.tracks.items[0]);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                });
        }
    

if (inquirerResponse.searchEngine === 'movie-search') {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'Enter a movie name',
                name: 'name'
            }
        ])
    
        .then(function (response) {
            movieName = response.name;
            console.log(movieName);
            axios
                .get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=e189c826")
            .then(function (response) {
                console.log("The movie's rating is: " + response.data.imdbRating);
            });
        })
}
    })