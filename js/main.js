
// 1
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms)

//2

const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [

   ],
   privat: false
}

//3

const questFirst = prompt('Один из последних просмотренных фильмов?')
const questSeond = prompt('На сколько оцените его?')
const questThird = prompt('Один из последних просмотренных фильмов?')
const questForth = prompt('На сколько оцените его?')

const movies = {}

personalMovieDB.movies[questFirst] = questSeond
personalMovieDB.movies[questThird] = questForth

console.log(personalMovieDB)