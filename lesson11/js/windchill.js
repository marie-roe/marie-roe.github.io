// The "windchill.js" script should get the two input values of temperature and wind speed, check to make sure they meet the required values allowed to officially calculate the wind chill, and then either calculate and display the windchill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.

let tempF = document.getElementById("temperature").textContent;
let speed = document.getElementById("windspeed").textContent;
let windchill =
  35.74 +
  0.6215 * tempF -
  35.75 * Math.pow(speed, 0.16) +
  0.4275 * tempF * Math.pow(speed, 0.16);
let output;

//"Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."

if (tempF <= 50 && speed > 3) {
  output = Math.round(windchill * 10) / 10;
} else {
  output = "N/A";
}

document.getElementById("windchill").textContent = output;
