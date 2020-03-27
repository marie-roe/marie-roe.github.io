/*let weatherKey = "933d35441b53286a49752a15f62023cb";
let id="5604473";*/

/*switch(document.getElementById('town').innerHTML) {
  case "Preston Idaho":
    id = "";
    break;
  case "Soda Springs":
    id = "5607916";
    break;
  case "Fish Haven Idaho":
    id = "5585010";
    break;
}*/
const currentWeather =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&&APPID=933d35441b53286a49752a15f62023cb";

fetch(currentWeather)
  .then(response => response.json())
  .then(jsObject => {
    document.getElementById("sky").textContent =
      jsObject.weather[0].description;

    document.getElementById("temperature").textContent = jsObject.main.temp;

    document.getElementById("humidity").textContent = jsObject.main.humidity;

    document.getElementById("windspeed").textContent = jsObject.wind.speed;
  });
