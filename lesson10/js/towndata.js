const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.log(jsonObject);
    const towns = jsonObject['towns'];

     for (let i=0; i<2; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain  = document.createElement('p');
      let image = document.createElement('img');
      

      h2.textContent = towns[i].name; 
      h3.textContent = towns[i].motto;
    
      
      year.textContent = "Year Founded" + ": " + towns[i].yearFounded;
      pop.textContent = "Population" + ": " + towns[i].currentPopulation;
      rain.textContent = "Annual Rainfall" + ": " + towns[i].averageRainfall + " inch(es)";
      image.setAttribute('src', "images/" + towns.photo);
      image.setAttribute('alt',"images/" + towns.name);

  
      card.appendChild(h2);
      card.appendChild(h3)
      card.appendChild(year);
      card.appendChild(pop);
      card.appendChild(rain);
      card.appendChild(image);
      

      document.querySelector('.towns').appendChild(card);
  
  }
});