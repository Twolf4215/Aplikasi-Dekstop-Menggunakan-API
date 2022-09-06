const apiKey = "9ede4ccade1e73807155c6b72c62d717";

const findBtn = document.querySelector("#findBtn");
const city = document.querySelector("#nama-kota");
const weatherDescription = document.querySelector("#weather-description");
const temp = document.querySelector("#temp")
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#humidity");

function getWeatherAPI(){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=${apiKey}`;
    fetch(apiURL)
    .then(response => response.json())
    .then((data)=> {
        weatherDescription.innerHTML = data.weather[0].description;
        temp.innerHTML = `${data.main.temp}°C`;
        windSpeed.innerHTML = `${data.wind.speed}m/s`;
        humidity.innerHTML = `${data.main.humidity}%`
    })
}

findBtn.addEventListener("click", getWeatherAPI);