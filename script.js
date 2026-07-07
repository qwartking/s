let end = new Date().getTime() + (2 * 60 * 60 * 1000);

function updateTimer(){

let now = new Date().getTime();

let distance = end - now;

if(distance <= 0){

end = new Date().getTime() + (2 * 60 * 60 * 1000);

distance = end - now;

}

let hours = Math.floor(distance / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("hours").innerHTML = String(hours).padStart(2,'0');
document.getElementById("minutes").innerHTML = String(minutes).padStart(2,'0');
document.getElementById("seconds").innerHTML = String(seconds).padStart(2,'0');

}

setInterval(updateTimer,1000);

updateTimer();