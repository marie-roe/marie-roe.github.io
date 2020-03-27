const hambutton = document.querySelector(".menuTab");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navlist").classList.toggle("responsive");
}
