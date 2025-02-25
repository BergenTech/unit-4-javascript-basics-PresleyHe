
let movies = ["inception", "Titanic", "Interstellar", "Avatar", "The Matrix"]

let question = prompt("Guess what movie is in the list")

// Gets the item in the array that is 
let longMovie = movies.find(movies => movies.length > 10)
console.log(longMovie)

// Gets the index of longMovieIndex
let longMovieIndex = movies.indexOf("Interstellar")
console.log(longMovieIndex)

//  if (movies.includes(question))
 if (question === longMovie) { 
     alert(`Yes the movie is ${longMovie} at index ${longMovieIndex}.`)
 } else {
     alert("The movie isn't in the list.")
 }



