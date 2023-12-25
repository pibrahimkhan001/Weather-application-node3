const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=7f831a3c864749ca8eb21755231912&q='+ lat +','+ long +'&aqi=no'

    request( {url, json: true}, (error, {body}) => {

  
        if(error){
           callback('Unable to connect to weather services', undefined)
        }
            else if(body.error){
                callback('unable to find location. ', undefined)
            }
    
            else{
                 callback(undefined, 'It is currently ' + body.current.temp_c + ' degrees  C out there, but it feels like ' + body.current.feelslike_c + ' degrees C. The rain forecast for today is : ' + body.current.condition.text+ ', and humidity is : ' +body.current.humidity)
                }
    
    })
}

module.exports = forecast