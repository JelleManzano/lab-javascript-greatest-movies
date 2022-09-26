// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((eachDirector) => {
    return eachDirector.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let totalDramas = 0;

  let spielbergDramas = moviesArray.filter((pelis) => {
    if (
      pelis.director === "Steven Spielberg" &&
      pelis.genre.includes("Drama")
    ) {
      totalDramas++;
      return true;
    } else {
      return false;
    }
  });
  return totalDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce((acc, movieScore) => {
    if (movieScore.score === undefined) {
      return acc;
    } else {
      return acc + movieScore.score / moviesArray.length;
    }
  }, 0);

  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let onlyDrama = moviesArray.filter((pelicula) => {
    return pelicula.genre.includes("Drama");
  });
  return scoresAverage(onlyDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = structuredClone(moviesArray);
  let orderedFilms = newArray.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      }
      return 0;
    }
  });
  return orderedFilms;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clonedTitlesArray = moviesArray.map((pelicula) => {
    return pelicula.title;
  });
  clonedTitlesArray.sort()
  return clonedTitlesArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
