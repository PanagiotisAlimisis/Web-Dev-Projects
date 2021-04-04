const secondsArrow = document.querySelector('.seconds');
const minutesArrow = document.querySelector('.minutes');
const hoursArrow = document.querySelector('.hours');

function updateSecondsArrow(seconds) {
    seconds = ((seconds/60)*360)+90;
    secondsArrow.style.transform = `rotate(${seconds}deg)`;

}

function updateMinutesArrow(minutes) {
    minutes = ((minutes/60)*360)+90;
    minutesArrow.style.transform = `rotate(${minutes}deg)`;
}

function updateHoursArrow(hours) {
    hours = ((hours/12)*360)+90;
    hoursArrow.style.transform = `rotate(${hours}deg)`;
}


function getCurrentDate() {
    const currentDate = new Date();
    updateSecondsArrow(currentDate.getSeconds());
    updateMinutesArrow(currentDate.getMinutes());
    updateHoursArrow(currentDate.getHours());
}

setInterval(getCurrentDate, 1000);
