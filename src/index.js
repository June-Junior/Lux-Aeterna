import './index.html';
// import menuSource from './colors.json';

const btn = document.querySelectorAll("button");

const btnStart = btn[0];
const btnStop = btn[1];

const body = document.querySelector("body");

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

let randomColorPicked = null;
let intervalId = null;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function onStartClick() {
  btnStart.disabled = true;
  
  intervalId = setInterval(colorPicker, 1000);
}

function colorPicker() {
  const randomIndexFromColorsArray = randomIntegerFromInterval(0, colors.length - 1);
  randomColorPicked = colors[randomIndexFromColorsArray];
  bodyColorChange();
} 

function bodyColorChange() {
  body.style.backgroundColor = randomColorPicked;
  console.log(randomColorPicked);
}

onStartClick();
onStopClick();

// let intervalId;
// // console.log(randomIntegerFromInterval(0, colors.length - 1));

function onStopClick() {
  clearInterval(intervalId);
  btnStart.disabled = false;
}

