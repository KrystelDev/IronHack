// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log("hola");

function getAllDirectors(moviesArray) {
  let result = moviesArray.map((pelicula) => {
    return pelicula.director;
  });
  console.log("Iteration 1->", result);
  return result;
}

// // Bonus:
// function getAllDirectors(moviesArray) {
//   let arrayDirector = moviesArray.map((pelicula) => {
//     return pelicula.director;
//   });
//   let result = arrayDirector.filter((director, posición) => {
//     arrayDirector.indexOf(director) === posición;
//   });
// }

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

  //more info .sort whit condicional
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
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
  let arrayNew = moviesArray.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  let arrayNewOrder = arrayNew.slice(0, 20);

  result = arrayNewOrder.map((movie) => movie.title);

  console.log("Iteration 6->", result);
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  console.log("____ENTRA____");
  // console.log(moviesArray);
  let result;
  let arrayNew = [...moviesArray]; // Operador spread (de propagación) en Javascript ES6
  let duracionGeneral;
  let horas;
  let minutos;

  result = arrayNew.map((movie) => {
    // calcular horas enteras:
    console.log("Dentro map");
    duracionGeneral = movie.duracion
      .replace(" ", "")
      .split("h")
      .replace("min", "");
    console.log(duracionGeneral);
    horas = parseInt(duracionGeneral[0]);
    minutos = parseInt(duracionGeneral[1]);
    movie.duration = horas + minutos;
  });
  console.log("Iteration 7->" + result);
  return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
