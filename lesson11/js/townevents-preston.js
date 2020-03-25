const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
   
    const towns = jsonObject["towns"];

    for (let i=0; i<towns.length; i++) {
     if (towns[i].name == "Preston") {
      let card = document.createElement('section');
    
      let event = document.createElement('p'); 
    
      event.textContent = "Upcoming Events " + towns[i].events;
      
      card.appendChild(event);

      document.querySelector('.prestonevents').appendChild(card);
     }
  }
});