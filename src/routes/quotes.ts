import express from 'express'
import { greet } from '../utils/greetings'
import { QuotesCore } from '../utils/quotesCore'
import { WeatherCore } from '../utils/weatherCore'

export var QuoteRouter = express.Router()

QuoteRouter.get('/',async(req,res)=>{
    try{

       let quotes:string=  await QuotesCore.getTodayQuote()
       let greetMe:string = greet()
       let currentWeather =  await WeatherCore.getCurrentWeather()
       let temperature:string = (currentWeather.main.temp_min - 273.15).toFixed(2)
       let weatherCondition = currentWeather.weather[0].description
       
       let result:string = `${greetMe} ${quotes} The current temperature is ${temperature} celcius and the weather condition for today is ${weatherCondition}.`

       
       res.status(200).json({result:result})

    }catch(error){
        res.status(400).json({error:error})
    }

})