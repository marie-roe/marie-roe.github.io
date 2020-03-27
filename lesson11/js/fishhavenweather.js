const currentWeather =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&&APPID=933d35441b53286a49752a15f62023cb";

fetch(currentWeather)
  .then(response => response.json())
  .then(jsObject => {
    document.getElementById("sky").textContent =
      jsObject.weather[0].description;

    document.getElementById("temperature").textContent = jsObject.main.temp;

    document.getElementById("humidity").textContent = jsObject.main.humidity;

    document.getElementById("windspeed").textContent = jsObject.wind.speed;
  });
