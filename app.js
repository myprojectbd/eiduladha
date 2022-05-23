const eiduladha = "9 July 2022";

const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('minit');
const sec= document.getElementById('second');

function countdown() {
    const eidday = new Date(eiduladha);
    const currentday = new Date();

    const tottaltime = (eidday - currentday)/1000;

    const days = Math.floor(tottaltime / 3600 / 24);

    const hours = Math.floor(tottaltime /3600) % 24 ;

    const mint = Math.floor(tottaltime / 60) % 60 ;

    const second = Math.floor(tottaltime) % 60;


    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mint;
    sec.innerHTML = second;
    
}
countdown();
setInterval(countdown, 1000);