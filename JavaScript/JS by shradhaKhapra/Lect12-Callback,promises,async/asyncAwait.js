async function api(){
    return new promise( (resolve, reject) =>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000)
    });
} 


async function getWeatherData(){
    await api();
    await api();
}