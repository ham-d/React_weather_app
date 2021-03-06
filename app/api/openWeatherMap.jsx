var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=fa0b2c3ddd1684ac9dda6f9fa1236d58&units=imperial';

//fa0b2c3ddd1684ac9dda6f9fa1236d58

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return {
                    location: `${res.data.name}, ${res.data.sys.country}`,
                    temp: Math.floor(res.data.main.temp)
                }
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}