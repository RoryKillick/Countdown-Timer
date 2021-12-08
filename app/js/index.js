let timer = setInterval(calculateTimeRemaining = () => {
    let now = new Date().getTime();
    const deadlineDate = new Date ('December 25, 2021 22:00:00').getTime();
    
    let time = deadlineDate - now
    let days = Math.floor(time / (1000*60*60*24));
    let hours = Math.floor((time % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((time % (1000*60*60))/(1000*60));
    let seconds = Math.floor((time % (1000*60))/1000);

    document.querySelector('.days').textContent = days;
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}, 1000);