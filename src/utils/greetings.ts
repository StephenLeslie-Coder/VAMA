import { getCurrentDate } from "./date"

export const greet = ()=>{

   let date =  getCurrentDate()
   return  `Good Morning Stephen, it's ${date}.`

}

console.log(greet());


