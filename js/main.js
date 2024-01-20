
// 1
// let numberOfFilms

// function start() {
//    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//       numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }

// start()

//2

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: true,
   start: function(){
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function() {
      for(let i = 0; i < 2; i++) {
         const questFirst = prompt('Один из последних просмотренных фильмов?');
         const questSeond = prompt('На сколько оцените его?')
         
         if(questFirst === null || questFirst.length > 50 || questFirst.length == 0) {
            i--
         } else {
            personalMovieDB.movies[questFirst] = questSeond;
         }
      }
   },
   detectPersonalLevel: function() {
      if(parseInt(personalMovieDB.count) < 10) {
         alert('Просмотренно довольно мало фильмов')
      } else if(parseInt(personalMovieDB.count) >= 10 && parseInt(personalMovieDB.count) <= 30) {
         alert('вы класический зритель')
      } else if(parseInt(personalMovieDB.count) > 30) {
         alert('Вы киноман')
      } else {
         alert('Произошла ошибка')
      }
   },
   writeYourGenres: function() {
      for(let i = 1; i <= 3; i++) {
         const a = prompt(`Ваш любимый жанр под номером ${i}`)
         if(a === null || a.length == 0) {
            i--
         } else {
            personalMovieDB.genres[i - 1] =  a
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр #${i + 1} - это ${item}`)
      })
   },
   showMyDb: function() {
      if(personalMovieDB.privat == false) {
         console.log(personalMovieDB)
      }
   },
   toggleVisibleMyDB: function() {
      if(personalMovieDB.privat == true) {
         personalMovieDB.privat = false
      } else (
         personalMovieDB.privat = true
      )
   }
}
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDb();


//3
// function rememberMyFilms() {
// for(let i = 0; i < 2; i++) {
//       const questFirst = prompt('Один из последних просмотренных фильмов?');
//       const questSeond = prompt('На сколько оцените его?')
      
//       if(questFirst === null || questFirst.length > 50 || questFirst.length == 0) {
//          i--
//       } else {
//          personalMovieDB.movies[questFirst] = questSeond;
//       }
//    }
  
// }
// rememberMyFilms()

// function detectPersonalLevel() {
//    if(parseInt(personalMovieDB.count) < 10) {
//       alert('Просмотренно довольно мало фильмов')
//    } else if(parseInt(personalMovieDB.count) >= 10 && parseInt(personalMovieDB.count) <= 30) {
//       alert('вы класический зритель')
//    } else if(parseInt(personalMovieDB.count) > 30) {
//       alert('Вы киноман')
//    } else {
//       alert('Произошла ошибка')
//    }
// }

// detectPersonalLevel();

// function writeYourGenres(){
//    for(let i = 1; i <= 3; i++) {
//       const a = prompt(`Ваш любимый жанр под номером ${i}`)
//       personalMovieDB.genres[i - 1] =  a
//    }
// }

// writeYourGenres()

// function showMyDb() {
//    if(personalMovieDB.privat == false) {
//       console.log(personalMovieDB)
//    }
// }

// showMyDb()

//4

