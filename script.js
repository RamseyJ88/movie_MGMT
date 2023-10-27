let allMovies = [];

function display(message) {
    document.getElementById("result").innerHTML += message + "<br>";
}

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
      this.title = title;
      this.rating = rating;
      this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    display("A new movie is added");
}


//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    if (allMovies.length === 0) {
        display('No movies in the list.');
      } else {
        display('Printing all movies....');
        allMovies.forEach((movie, index) => {
          display(
            `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched ? 'Yes' : 'No'}`
          );
        });
        display(`\nYou have ${allMovies.length} movies total`);
    }
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    if (highRatedMovies.length === 0) {
        display(`No movies with a rating higher than ${rating}.`);
    } else {
        display('printing movie that has a rating higher than 3.5');
        highRatedMovies.forEach((movie, index) => {
            display(
                `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched ? 'Yes' : 'No'}`
            );
        });
        display(`In total, there are ${highRatedMovies.length} matches`);
    }
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movieToToggle = allMovies.find(movie => movie.title === title);
    if (movieToToggle) {
        movieToToggle.haveWatched = !movieToToggle.haveWatched;
        display(`changing the status of the movie...`);
    } else {
        display(`Movie '${title}' not found in the list.`);
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace display with display on web page*/
display("----------------");
display("running program......");
display("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace display with display on web page*/
display("----------------");
addMovie(movie1);
display("----------------");



changeWatched("Spiderman");
/*replace display with display on web page*/
display("----------------");

printMovies();

/*replace display with display on web page*/
display("----------------");

changeWatched("Spiderman");
/*replace display with display on web page*/
display("----------------");

printMovies();
/*replace display with display on web page*/
display("----------------");

highRatings(3.5);