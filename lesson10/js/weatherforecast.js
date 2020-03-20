let weatherKey = "44294ac7db20b57cd171a76c2466d031";
let id="";

switch(document.getElementById('town').innerHTML) {
  case "Preston":
    id = "5604473";
    break;
  case "SodaSprings":
    id = "5607916";
    break;
  case "FishHaven":
    id = "5585010";
    break;
}


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=${weatherKey}`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let daysofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i=0; i<fiveday.length; i++) {
      let d = new Date(fiveday[i].dt_txt);
      let day  = daysofWeek[d.getDay()];

      document.getElementsByClassName("day" + i).textContent = day;

      const imagesrc =(`https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`);

      document.getElementById("icon" + i).setAttribute("src", "imagesrc");

      const describe = jsObject.weather[0].description;
      document.getElementById("icon" + i).setAttribute("alt", describe);
      
    }
  });



  //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation

// const desc = jsObject.weather[0].description;  // note how we reference the weather array
  //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
 // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
 // document.getElementById('icon').setAttribute('alt', desc);


 const currentWeather = 'http://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID={weatherKey}';

fetch(currentWeather)
  .then((response) =>response.json())
  .then((jsObject) => {

    const currently = document.querySelector('#sky');
    currently.textContent = jsObject.weather[0].main;

    const currentTemp = document.querySelector('#temperature');
    currentTemp.textContent = jsObject.main.temp;

    const humid = document.querySelector('#humidity');
    humid.textContent = jsObject.main.humidity;

    const ws = document.querySelector('#windspeed');
    ws.textContent = jsObject.wind.speed;
 
  });