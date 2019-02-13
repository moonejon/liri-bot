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
            
                .then(function (response) {
                    if (response == '') {
                        trackName === 'All Too Well'
                    } else {
                        var trackName = response.name;
                        console.log(trackName);
                    }
                    
                    spotify
                        .search({ type: 'track', query: trackName })
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
        
        if (inquirerResponse.searchEngine === 'concert-search') {
            inquirer
                .prompt([

                    {
                        type: 'input',
                        message: 'Enter a band/artist name',
                        name: 'name'
                    }
                ])

                .then(function (response) {
                    artist = response.name;
                    console.log(artist);
                    axios
                        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
                        .then(function (response) {
                            console.log(response.data[1].lineup[0]);
                        });
                })
        }
    })