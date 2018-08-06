const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const input = document.querySelector('#date');

function setDate() {
    
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((mins / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) +90;

    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

} 

setInterval(setDate, 1000);