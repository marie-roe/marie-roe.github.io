// If it's Friday display text "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park" 

let d = new Date();
let day = d.getDay();
let show = "none";

if(day==5) {
    show = "block";
}

document.getElementById("pancake").style.display = show;