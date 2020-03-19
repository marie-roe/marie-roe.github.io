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

      document.getElementById("day" + i).textContent = day;

     // const imagesrc =(`https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`);

      //document.getElementById("icon").setAttribute("src", "imagesrc");

      //const describe = jsObject.weather[0].description;
     // document.getElementById("icon" + i).setAttribute("alt", describe);
      
    }
  });



