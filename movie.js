'use strict'

function getMovie(movieTitle){
var request = require('request');
	request('http://www.omdbapi.com/?t=' + movieTitle, function(error, response, body){
		// console.log(error);
		// console.log(response);
		console.log(body);

	});

};

// getMovie("Troy");

module.exports = getMovie;