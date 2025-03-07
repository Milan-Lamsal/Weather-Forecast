const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = config.apiKey;

// Validate API key
if (!apikey || apikey === 'YOUR_API_KEY_HERE') {
    console.error('Please set up your OpenWeatherMap API key in config.js');
    document.querySelector(".error").textContent = "API key not configured. Please set up your API key.";
    document.querySelector(".error").style.display = "block";
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const tempUnitInputs = document.querySelectorAll('input[name="temp-unit"]');
const windUnitInputs = document.querySelectorAll('input[name="wind-unit"]');

// Variables to store current values
let currentTempCelsius = 0;
let currentWindKph = 0;

// Dark mode functionality
function enableDarkMode() {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkMode();
    darkModeToggle.checked = true;
}

// Listen for dark mode toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

async function checkWeather(city){
    try {
        if (!apikey || apikey === 'YOUR_API_KEY_HERE') {
            throw new Error('API key not configured');
        }

        const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apikey}`);
        
        if(response.status === 404){
            document.querySelector(".error").textContent = "City not found. Please check the spelling.";
            document.querySelector(".error").style.display = "block";
            document.querySelector(".Weather").style.display = "none";
        } else if (response.status === 401) {
            document.querySelector(".error").textContent = "Invalid API key. Please check your configuration.";
            document.querySelector(".error").style.display = "block";
            document.querySelector(".Weather").style.display = "none";
        } else if (!response.ok) {
            throw new Error('Weather data fetch failed');
        } else {
            const data = await response.json();

            // Store the temperature and wind speed
            currentTempCelsius = Math.round(data.main.temp);
            currentWindKph = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h

            // Update displays based on current unit selections
            const selectedTempUnit = document.querySelector('input[name="temp-unit"]:checked').value;
            const selectedWindUnit = document.querySelector('input[name="wind-unit"]:checked').value;
            
            updateTemperatureDisplay(selectedTempUnit);
            updateWindDisplay(selectedWindUnit);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

            // Update weather icon
            updateWeatherIcon(data.weather[0].main);

            document.querySelector(".Weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        let errorMessage = "Failed to fetch weather data. Please try again.";
        
        if (error.message === 'API key not configured') {
            errorMessage = "Please set up your OpenWeatherMap API key in config.js";
        } else if (!navigator.onLine) {
            errorMessage = "Please check your internet connection.";
        }
        
        document.querySelector(".error").textContent = errorMessage;
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }
}

// Function to update weather icon
function updateWeatherIcon(weatherMain) {
    const iconMap = {
        'Clouds': 'clouds.png',
        'Rain': 'rain.png',
        'Drizzle': 'drizzle.png',
        'Clear': 'clear.png',
        'Mist': 'mist.png'
    };

    if (iconMap[weatherMain]) {
        weatherIcon.src = `assests/${iconMap[weatherMain]}`;
    }
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

// Function to update temperature display based on selected unit
function updateTemperatureDisplay(unit) {
    const tempElement = document.querySelector(".temp");
    if (unit === "celsius") {
        tempElement.innerHTML = currentTempCelsius + "°C";
    } else {
        const tempFahrenheit = celsiusToFahrenheit(currentTempCelsius);
        tempElement.innerHTML = tempFahrenheit + "°F";
    }
}

// Function to convert km/h to mph
function kphToMph(kph) {
    return Math.round(kph * 0.621371);
}

// Function to update wind speed display
function updateWindDisplay(unit) {
    const windElement = document.querySelector(".wind");
    if (unit === "kph") {
        windElement.innerHTML = currentWindKph + " km/h";
    } else {
        const windMph = kphToMph(currentWindKph);
        windElement.innerHTML = windMph + " mph";
    }
}

// Add event listeners to wind unit toggle buttons
windUnitInputs.forEach(input => {
    input.addEventListener("change", (e) => {
        updateWindDisplay(e.target.value);
    });
});

// Update temperature event listeners
tempUnitInputs.forEach(input => {
    input.addEventListener("change", (e) => {
        updateTemperatureDisplay(e.target.value);
    });
});

// Search button click event
searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim()) {
        checkWeather(searchBox.value);
    }
});

// Clear error message when user starts typing
searchBox.addEventListener('input', () => {
    document.querySelector(".error").style.display = "none";
});

// Add "Enter" Key Support
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && searchBox.value.trim()) {
        checkWeather(searchBox.value);
    }
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
