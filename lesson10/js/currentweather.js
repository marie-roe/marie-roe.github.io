let weatherKey = "44294ac7db20b57cd171a76c2466d031";
let id="";

switch(document.getElementById('town').innerHTML) {
  case "Preston, Idaho":
    id = "5604473";
    break;
  case "Soda Springs, Idaho":
    id = "5607916";
    break;
  case "FishHaven":
    id = "5585010";
    break;
}

const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=$(id)&units=imperial&APPID={weatherKey}';

fetch(apiURL)
  .then((response) =>response.json())
  .then((jsObject) => {

    const currently = document.querySelector('#sky');
    currently.textContent = jsObject.

    const currentTemp = document.querySelector('#current-temp');

    currentTemp.textContent = jsObject.main.temp;

    //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
 // const desc = jsObject.weather[0].description;  // note how we reference the weather array
  //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
 // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
 // document.getElementById('icon').setAttribute('alt', desc);