// api key : 82005d27a116c2880c8f0fcb866998a0






const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");












// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API Key 
const key = "82005d27a116c2880c8f0fcb866998a0";

// Celsius to Fahrenheit conversion
function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5)+ 32;
}

