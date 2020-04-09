const requestURL = "./Rafting/JSON/guides.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const  riverguides = jsonObject['riverguides'];
    for (let i = 0; i < riverguides.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let certlevel = document.createElement('p');
      let exp = document.createElement ('p');
      let email = document.createElement('p');
      let bio = document.createElement('p');
      let image = document.createElement('img') ;
      fullname="";

     
      h2.textContent = riverguides[i].name + ' ' + riverguides[i].lastname;
    
      image.setAttribute("src", "images/" + riverguides[i].photo);
      image.setAttribute("alt", riverguides[i].name);
      certlevel.textContent = riverguides[i].certlevel;
      exp.textContent = riverguides[i].yrsExp;
  
      card.appendChild(h2);
      card.appendChild(certleevel);
      card.appendChild(exp);
      card.appendChild(image);
      

      document.querySelector('.guidecard').appendChild(card);
  
  }
});