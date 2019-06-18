const request = require('request')
// const config = require('../data/config.js')
console.log(process.env)
// const DARKSKY_KEY = process.env.DARKSKY_KEY || config.DARKSKY_KEY

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_KEY}/${latitude},${longitude}?units=us`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    }
    else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast