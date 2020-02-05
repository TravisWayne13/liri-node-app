// require('dotenv').config()
const inquirer = require('inquirer')
const axios =require('axios')
// const keys = require('./keys.js')


const movie = () => {
  inquirer.prompt({
    message: 'What movie would you like to find?',
    name: 'title',
    type: 'input'
  })
  .then(type => {
    console.log(type.title)
   axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${type.title}`)
  .then(movie => {
    let movieInfo = {
      Title: movie.data.Title,
      Released: movie.data.Year,
      imdbRating: movie.data.imdbRating,
      countryProduced: movie.data.Country,
      Language: movie.data.Language,
      Plot: movie.data.Plot,
      Actors: movie.data.Actors
    }
    console.log(movieInfo)
    })
    .catch(e => console.error(e))
  })
} 

const bands = () => {
  inquirer.prompt({
    message: 'what artist/band would you like to find?',
    name: 'artist',
    type: 'input'
  })
  .then(type => {
    console.log(type.artist)
    axios.get(`https://rest.bandsintown.com/artists/spite/events?app_id=codingbootcamp`)
  })
  .then(data => {
    console.log(data)
  })
  .catch(e => console.error(e))
}

const main = () => {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to search?',
    choices: ['Movie', 'Song', 'Band in town']
  })
  .then(({ action }) => {
    switch (action) {
      case 'Movie':
        movie()
        break
      case 'Song':
        console.log(action)
        break
      case 'Band in town':
        bands()
        break
    }
  })
}

main()
