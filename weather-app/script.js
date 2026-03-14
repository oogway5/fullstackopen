const inputLon = document.getElementById("textInput");
const inputLat = document.getElementById("textInput2");

const form = document.getElementById("weatherForm");

const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const codeElement = document.getElementById("weatherCode");

const toggleBtn = document.getElementById("toggleUnit");

let Celsius = true;
let savedWeather = null;

async function getWeather(longitude, latitude) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("API DATA:", data);
        const weather = processWeather(data);

        savedWeather = weather;
        displayWeather(weather);
    }catch (error) {
        console.error("Error:", error);
    }
}

function processWeather(data) {
    return {
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode
    }
}

function displayWeather(weather) {
    let temperature = weather.temperature;
    if (!Celsius) {
        temperature = (temperature * 9 / 5) + 32;
    }

    tempElement.textContent =
        `Temperature: ${temperature.toFixed(1)} ${Celsius ? "°C" : "°F"}`;
    windElement.textContent =
        `Wind Speed: ${weather.windspeed} km/h`;
    codeElement.textContent =
        `Weather Code: ${weather.weathercode}`;

    changeBackground(weather.weathercode);

}

function changeBackground(code) {

    if (code === 0) {
        document.body.style.background = "#FFD54F";
    }
    else if (code < 50) {
        document.body.style.background = "#81D4FA";
    }
    else {
        document.body.style.background = "#B0BEC5";
    }

}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const longitude = parseFloat(inputLon.value);
    const latitude = parseFloat(inputLat.value);

    console.log("Longitude:", longitude);
    console.log("Latitude:", latitude);

    getWeather(longitude, latitude);

});

toggleBtn.addEventListener("click", function () {
    Celsius = !Celsius;
    if (savedWeather) {
        displayWeather(savedWeather);
    }

});
