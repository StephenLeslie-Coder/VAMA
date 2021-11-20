import axios from "axios"

export module QuotesCore{

    export const getTodayQuote = async()=>{

        let result = await axios.get('https://zenquotes.io/api/today')
        return result.data[0].q
    }
}