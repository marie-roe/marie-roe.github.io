let weatherKey = "933d35441b53286a49752a15f62023cb";
let id = " ";

switch (document.getElementById("town").innerHTML) {
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

const currentWeather =
  "https://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID={weatherKey}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   //console.log(jsObject);
    let fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    let daysofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    

    for (let i=0; i<fiveday.length; i++) {
      let d = new Date(fiveday[i].dt_txt);
      let day  = daysofWeek[d.getDay()];

      document.getElementById("day" + i).textContent = day;
      
      document.getElementById("temp" + i).textContent = fiveday[i].main.temp;

      const imagesrc =`https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`;

      document.getElementById("icon" + i).setAttribute("src", imagesrc);

      const describe = fiveday[i].weather[0].description;
      document.getElementById("icon" + i).setAttribute("alt", describe);
      
    }
  });