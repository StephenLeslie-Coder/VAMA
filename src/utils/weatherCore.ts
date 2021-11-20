import axios from "axios"
require('dotenv').config()

export module WeatherCore{

    export const getCurrentWeather=async()=>{


        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=3489227&appid=${process.env.API_KEY}`)
        return result.data
    }

    
}