const hand_hr = document.querySelector(".hand.hour");
const hand_min = document.querySelector(".hand.minute");
const hand_sec = document.querySelector(".hand.second");

function tick(){
 const d = new Date();

 let seconds = d.getSeconds();
 const secDeg = ((seconds / 60)*360) + 90;
 hand_sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;

 let minutes = d.getMinutes();
 const minDeg = ((minutes/60)*360)  + ((seconds/60)*6) + 90;
 hand_min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;

 let hours = d.getHours();
 const hrDeg = ((hours/12)*360)+((minutes/60)*30)  + 90;
 hand_hr.style.transform = `translateY(-50%) rotate(${hrDeg}deg)`;
}

tick();
setInterval(tick,1000);