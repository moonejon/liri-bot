var Spotify = require("node-spotify-api");
var Axios = require("axios");
var Dotenv = require("dotenv");
var Moment

var spotify = new Spotify({
    id: "f10741a2a8184466b33731526c6785bf",
    secret: "3a7fc836e82a40578e1e28803b2c3845"
});



spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

spotify.search(track, dont stop believing);