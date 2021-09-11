let now = new Date().getTime();
const DeadlineDate = new Date ('September 25, 2021 22:00:00').getTime();

let time = DeadlineDate - now
let days = Math.floor(time / (1000*60*60*24));
let hours = Math.floor((time % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((time % (1000*60*60))/(1000*60));
let seconds = Math.floor((time % (1000*60))/1000);

document.querySelector('.days').innerHTML = days;
document.querySelector('.hours').innerHTML = hours;
document.querySelector('.minutes').innerHTML = minutes;
document.querySelector('.seconds').innerHTML = seconds;