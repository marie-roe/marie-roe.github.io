//current year
let d = new Date().getFullYear();
document.getElementById("currentyear").textContent = d;

//last modified date
let LastModif = new Date(document.lastModified);
document.getElementById("lastmodified").textContent =
  "Last Updated: " + LastModif;
