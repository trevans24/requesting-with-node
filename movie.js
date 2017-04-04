'use strict'

function getMovie(movieTitle){
var request = require('request');
	request('http://www.omdbapi.com/?t=' + movieTitle, function(error, response, body){
		// console.log(error);
		// console.log(response);
		var parsed = JSON.parse(body);
		console.log(parsed);
		console.log('\n');

	});

};

// getMovie("Troy");

module.exports = getMovie;