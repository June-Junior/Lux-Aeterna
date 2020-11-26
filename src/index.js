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
  centisecsHtmlSelector: document.querySelector('span[data-value="centisecs"]'),
  };

const CountdownTimer = {
  start() {
    const deadLine = new Date().setTime(1606496400000);
    
    function showTimeCountdown() {
      const currentTime = Date.now();
      console.log('start -> deadLine', deadLine);
      console.log('start -> currentTime', currentTime);

      const countdownDelta = deadLine - currentTime;
      console.log(countdownDelta);
      const {days, hours, mins, secs, centisecs} = measureTimeValues(countdownDelta);

      updateVisibleTimer({days, hours, mins, secs, centisecs});
      // const timeValues = measureTimeValues(countdownDelta);
      // console.log(timeValues);
      console.log(`${days}:${hours}:${mins}:${secs}:${centisecs}`);
      
    }
    setInterval(showTimeCountdown, 10);
  },
};
 
CountdownTimer.start();

function formatNumber(value) {
  return String(value).padStart(2, '0');
}

// function formatDeciseconds(value) {
//   return String(value).padStart(1, '0');
// }

function measureTimeValues(time) {
  const days = formatNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = formatNumber(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = formatNumber(Math.floor((time % (1000 * 60)) / 1000));
  const centisecs = ("00" + time).slice(-3, -1);
  
  return {days, hours, mins, secs, centisecs};
}

function updateVisibleTimer({days, hours, mins, secs, centisecs}) {
  refs.daysHtmlSelector.textContent = `${days}`;
  refs.hoursHtmlSelector.textContent = `${hours}`;
  refs.minsHtmlSelector.textContent = `${mins}`;
  refs.secsHtmlSelector.textContent = `${secs}`;
  refs.centisecsHtmlSelector.textContent = `${centisecs}`;
}
