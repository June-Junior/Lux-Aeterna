import './index.html';
import './styles.css';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const refs = {
  daysHtmlSelector: document.querySelector('span[data-value="days"]'),
  hoursHtmlSelector: document.querySelector('span[data-value="hours"]'),
  minsHtmlSelector: document.querySelector('span[data-value="mins"]'),
  secsHtmlSelector: document.querySelector('span[data-value="secs"]'),

  };

const CountdownTimer = {
  start() {
    const deadLine = new Date().setTime(1609452000000);
    
    function showTimeCountdown() {
      const currentTime = Date.now();
      console.log('ewrwrywrywrty');
      console.log('start -> deadLine', deadLine);
      console.log('start -> currentTime', currentTime);

      const countdownDelta = deadLine - currentTime;
      console.log(countdownDelta);
      const {days, hours, mins, secs} = measureTimeValues(countdownDelta);

      updateVisibleTimer({days, hours, mins, secs});
      // const timeValues = measureTimeValues(countdownDelta);
      // console.log(timeValues);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      
    }
    setInterval(showTimeCountdown, 1000);
  },
};
 
CountdownTimer.start();

function formatNumber(value) {
  return String(value).padStart(2, '0');
}

function measureTimeValues(time) {
  const days = formatNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = formatNumber(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = formatNumber(Math.floor((time % (1000 * 60)) / 1000));
  
  return {days, hours, mins, secs};
}

function updateVisibleTimer({days, hours, mins, secs}) {
  refs.daysHtmlSelector.textContent = `${days}`;
  refs.hoursHtmlSelector.textContent = `${hours}`;
  refs.minsHtmlSelector.textContent = `${mins}`;
  refs.secsHtmlSelector.textContent = `${secs}`;
}

// timer 2
const year = new Date().getFullYear();
const birthday = new Date(year, 5, 24).getTime();
const nextBirthday = new Date(year + 1, 5, 24).getTime();
const month = new Date().getMonth();
const dateOfMonth = new Date().getDate();
console.log(year);
console.log(birthday);
console.log(nextBirthday);
console.log(month);
console.log(dateOfMonth);

let message = document.querySelector("h1");

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let difference;
  if(month > 5 && dateOfMonth > 24) {
    difference = nextBirthday - today;

  } else {
    difference = birthday - today;
    message.textContent = 'Birthday Counter. Sooooon)';
  }

  // calc
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // HTMLdisplay
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);