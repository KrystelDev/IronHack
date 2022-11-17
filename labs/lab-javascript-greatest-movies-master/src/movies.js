// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let result = moviesArray.map((pelicula) => {
    return pelicula.director;
  });
  console.log("Iteration 1->", result);
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // console.log(moviesArray);

  // for (let index = 0; index < moviesArray.length; index++) {
  //   console.log(moviesArray[index].director);
  // }

  let result = moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
  console.log("Iteration 2->", result);
  return result;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let result;
  let allScore = 0;

  if (!moviesArray.length) {
    result = 0;
  } else {
    for (let index = 0; index < moviesArray.length; index++) {
      if (!moviesArray[index].score) {
        moviesArray[index].score = 0;
      }
    }

    for (let index = 0; index < moviesArray.length; index++) {
      allScore += moviesArray[index].score;
    }

    result = parseFloat((allScore / moviesArray.length).toFixed(2));
  }
  console.log("Iteration 3->", result);
  return result;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let result;
  let allDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  result = scoresAverage(allDrama);

  console.log("Iteration 4->", result);
  return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let result;
  const arrayNew = [...moviesArray]; // Operador spread (de propagación) en Javascript ES6

  result = arrayNew.sort(function (a, b) {
    // Le digo que mire únicamente la propiedad year
    const yearA = a.year;
    const yearB = b.year;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    if (yearA == yearB) {
      //En este caso ordenar por titulo
      const titleA = a.title;
      const titleB = b.title;
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  });
  console.log("Iteration 5->", result);
  return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let result;
  let arrayNew = moviesArray.slice(0, 19);

  console.log(arrayNew);
  result = arrayNew;

  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
