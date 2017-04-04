'use strict'

const movie = require("./movie");

var threeFavoriteMovies = ["Saving Private Ryan", "Entourage", "Wall-E"];

threeFavoriteMovies.forEach(function(film){
  // your code here
 	movie(film);
});