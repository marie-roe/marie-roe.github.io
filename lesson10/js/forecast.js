const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=44294ac7db20b57cd171a76c2466d031';

fetch(apiURL)
  .then((response) =>response.json())
  .then((jsObject) => {

    
    const fivedayForecast= jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    


    for (let i=0; i<fivedayForecast.length; i++) {
      document.getElementById('forecast${i+1}').textContent[i].main.temp;


    let daysofWeek = ["Sun", "Mon", "Tue", "Wed","Thurs", "Fri","Sat"];

    let d = new Date(fivedayForecast[i].dt-txt);
    let day = daysofWeek[d.getDay()];


    }
  });