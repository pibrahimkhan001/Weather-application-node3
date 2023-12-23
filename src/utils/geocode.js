const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text=' + encodeURIComponent(address) + '&format=json&apiKey=1320a42ad1114cc2af6ed1bb06f8f6cf'

    request ( {url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Error in finding location')
        }
        else if (body.results.length === 0){

            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.results[0].lat,
                longitude: body.results[0].lon,
                place: body.results[0].formatted
            })
        }
    })
}

module.exports = geocode
  
