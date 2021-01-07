const secondHand = document.querySelector(".sec-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    console.log(hours);
    secondHand.style.transform = `rotateZ(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotateZ(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotateZ(${hoursDegrees}deg)`;
    // console.log("hi");
}

setInterval(setDate, 1000);
