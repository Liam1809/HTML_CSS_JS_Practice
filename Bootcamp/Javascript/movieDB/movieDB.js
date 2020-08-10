var movies = [
{
	title: "In Bruges",
	rating: 4,
	hasWatched: true,
},
{
	title: "John Wick",
	rating: 5,
	hasWatched: true,
},
{
	title: "Busan 2",
	rating: 4.5,
	hasWatched: false,
},
{
	title: "BumBoBum",
	rating: 3.5,
	hasWatched: true,
}];

var buildMovie = function(movie) {
	let result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
	return result; 
};

movies.forEach(function(movie){
	console.log(buildMovie(movie));
});