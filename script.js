let allMovies = [];

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
    window.print("A new movie is added");
}


//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    if (allMovies.length === 0) {
        window.print('No movies in the list.');
      } else {
        window.print('Printing all movies....');
        allMovies.forEach((movie, index) => {
          window.print(
            `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched ? 'Yes' : 'No'}`
          );
        });
        window.print(`\nYou have ${allMovies.length} movies total`);
    }
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    if (highRatedMovies.length === 0) {
        window.print(`No movies with a rating higher than ${rating}.`);
    } else {
        window.print('printing movie that has a rating higher than 3.5');
        highRatedMovies.forEach((movie, index) => {
            window.print(
                `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched ? 'Yes' : 'No'}`
            );
        });
        window.print(`In total, there are ${highRatedMovies.length} matches`);
    }
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movieToToggle = allMovies.find(movie => movie.title === title);
    if (movieToToggle) {
        movieToToggle.haveWatched = !movieToToggle.haveWatched;
        window.print(`changing the status of the movie...`);
    } else {
        window.print(`Movie '${title}' not found in the list.`);
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace window.print with display on web page*/
window.print("----------------");
window.print("running program......");
window.print("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace window.print with display on web page*/
window.print("----------------");
addMovie(movie1);
window.print("----------------");



changeWatched("Spiderman");
/*replace window.print with display on web page*/
window.print("----------------");

printMovies();

/*replace window.print with display on web page*/
window.print("----------------");

changeWatched("Spiderman");
/*replace window.print with display on web page*/
window.print("----------------");

printMovies();
/*replace window.print with display on web page*/
window.print("----------------");

highRatings(3.5);