require("dotenv").config();
const keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var inquirer = require("inquirer");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

inquirer
    .prompt([

        {
            type: 'list',
            message: 'Choose an search engine!',
            choices: ['spotify', 'movie-search', 'concert-search', 'do-what-it-says'],
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
                    if (response.name == '') {
                        var trackName = 'All Too Well'
                    } else {
                        var trackName = response.name;
                    }
                    
                    spotify
                        .search({ type: 'track', query: trackName })
                        .then(function (response) {
                            console.log('Title: ' + response.tracks.items[0].name);
                            console.log('Artist: ' + response.tracks.items[0].artists[0].name);
                            console.log('From the album: ' + response.tracks.items[0].album.name);
                            console.log('Open in browser: ' + response.tracks.items[0].external_urls.spotify)
                        })
                        .catch(function (err) {
                            console.log("Perhaps you have mispelled your query. Please try again.");
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
                    if (response.name == '') {
                        var movieName = 'Titanic'
                    } else {
                        var movieName = response.name;
                    }
                    axios
                        .get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=e189c826")
                        .then(function (response) {
                            console.log("Title: " + response.data.Title);
                            console.log("Release Year: " + response.data.Year);
                            console.log("IMDB Rating: " + response.data.imdbRating);
                            console.log("Country: " + response.data.Country);
                            console.log("Language: " + response.data.Language);
                            console.log("Plot Summary: " + response.data.Plot);
                            console.log("Cast: " + response.data.Actors)
                        })
                        .catch(function (err) {
                            console.log("Perhaps you have mispelled your query. Please try again.");
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

                    if (response.name == '') {
                        var artist = 'Metallica'
                        console.log('Upcoming shows for Metallica \n');
                    } else {
                        var artist = response.name;
                        console.log('Upcoming shows for ' + artist + "\n");
                    }

                    axios
                        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
                        .then(function (response) {
                            for (i = 0; i < 5; i++) {
                                console.log("Concert Venue: " + response.data[i].venue.name);
                                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country)
                                console.log("Date: " + moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a") + "\n");
                            }
                        })
                        .catch(function (err) {
                            console.log("Perhaps you have mispelled your query. Please try again.");
                        });
                })
        }
        
        if (inquirerResponse.searchEngine === 'do-what-it-says') {
            inquirer
                .prompt([

                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: 'Are you sure?',
                        default: true,
                    }
                ])
                .then(function (response) {
                    if (response) {
                        fs.readFile("random.txt", "utf8", function (error, data) {
                            if (error) {
                                return console.log(error);
                            }
                            else {
                                movieName = data;

                                axios
                                    .get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=e189c826")
                                    .then(function (response) {
                                        console.log("Title: " + response.data.Title);
                                        console.log("Release Year: " + response.data.Year);
                                        console.log("IMDB Rating: " + response.data.imdbRating);
                                        console.log("Country: " + response.data.Country);
                                        console.log("Language: " + response.data.Language);
                                        console.log("Plot Summary: " + response.data.Plot);
                                        console.log("Cast: " + response.data.Actors)
                                    })
                            }
                          
                        })
                    }
                })
        }
    })