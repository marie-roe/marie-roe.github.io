
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bdate = document.createElement('p');
      let bplace = document.createElement('p');
      let image = document.createElement('img');
      fullname="";

     
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', fullname + " - " + prophets[i].order);
      bdate.textContent = prophets[i].birthdate;
      bplace.textContent = prophets[i].birthplace;
  
      card.appendChild(h2);
      card.appendChild(bdate);
      card.appendChild(bplace);
      card.appendChild(image);
      

      document.querySelector('.cards').appendChild(card);
  
  }
});