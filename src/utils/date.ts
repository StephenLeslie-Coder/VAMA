export const getCurrentDate= ()=>{

    let date = new Date()
    let stringDate = date.toLocaleDateString('default',{month:"long",day:"numeric","year":"numeric"}) 
    return stringDate
    
}
