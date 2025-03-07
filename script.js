const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey ="f80c046685793ba3b26f9cace21c6b69"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const reponse = await  fetch(apiUrl+ city + `&appid=${apikey}`)

    if(reponse.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }
    else{

    let data = await reponse.json();

    // console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C" ;
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed +"km/h" ;

if(data.weather[0].main=="Clouds"){
    weatherIcon.src = "assests/clouds.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src = "assests/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src = "assests/drizzle.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src = "assests/clear.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src = "assests/mist.png";
}
    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display="none";
    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

// Additional features  :Clear error message when user starts typing:

searchBox.addEventListener('input',()=>{
    document.querySelector(".error").style.display="none";
})

// Add "Enter" Key Support:
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkWeather(searchBox.value);
  });








//+++++++++++++++++++++++++++++++++++++++  API  ++++++++++++++++++++++++++++++++++++++++++++++++

// https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=f80c046685793ba3b26f9cace21c6b69&units=metric

/***    
 * {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 3000, …}
base
: 
"stations"
clouds
: 
{all: 20}
cod
: 
200
coord
: 
{lon: 85.3167, lat: 27.7167}
dt
: 
1741314210
id
: 
1283240
main
: 
feels_like
: 
12.63
grnd_level
: 
850
humidity
: 
82
pressure
: 
1013
sea_level
: 
1013
temp
: 
13.12
temp_max
: 
13.12
temp_min
: 
13.12
[[Prototype]]
: 
Object
name
: 
"Kathmandu"
sys
: 
{type: 1, id: 9201, country: 'NP', sunrise: 1741307841, sunset: 1741350152}
timezone
: 
20700
visibility
: 
3000
weather
: 
Array(1)
0
: 
{id: 701, main: 'Mist', description: 'mist', icon: '50d'}
length
: 
1
[[Prototype]]
: 
Array(0)
wind
: 
{speed: 1.54, deg: 100}
[[Prototype]]
: 
Object
 */
