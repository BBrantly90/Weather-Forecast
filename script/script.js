// state
let currCity = "Charlotte";
let units = "metric";

// Selectors
let city = document.querySelector(".weather_city");
let datetime = document.querySelector(".weather_datetime");
let weather_forecast = document.querySelector(".weather_forecast");
let weather_temperature = document.querySelector(".weather_temperature");
let weather_icon = document.querySelector(".weather_icon");
let weather_minmax = document.querySelector(".weather_minmax");
let weather_realfeel = document.querySelector(".weather_realfeel");
let weather_humidity = document.querySelector(".weather_humidity");
let weather_wind = document.querySelector(".weather_wind");
let weather_pressure = document.querySelector(".weather_pressure");

// Search
document.querySelector(".weather_search").addEventListener('submit', e => {
    let search = document.querySelector(".weather_searchform");
    // Prevent Default
    e.preventDefault();
    // Change city
    currCity = search.ariaValueMax;
    // Get Forecast
    getWeather();
    // Clear Form
    search.value = ""
})

// Units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if(units !== "metric"){
        // changes to metric
        units = "metric"
        // get forecast
        getWeather()
    }
})

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if(units !== "imperial"){
        // changes to imperial
        units = "imperial"
        // get forecast
        getWeather()
    }
})

function convertTimeStamp(timestamp, timezone){
    const convertTimezone = timezone / 3600; // seconds to hours
    const date = new Date(timestamp * 1000);
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true,
    }
    return date.toLocaleString("en-US", options)
}

// Convert country code to name
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}
