'use strict';
// При натиску на кнопку старт вона має пропадати а блоку з класом game має додаватися властивість diplay: flex.
// Коли намалювалися карти запускається тег аудіо з файлом normal.MP3
// Запустити файл аудіо можна через конструкцію document.querySelector(клас тега).play()
// При кліку на карту вона має перевертатися (додати клас flip)
// Коли клацнули на другу карту відбувається їхнє порівнянн по атрибуту data-name
// Якщо карти співпали їм дається opacity = 0;
// Якщо карти різні в них забираєтья клас flip
// При кліку на карту активується аудіофайл flip.MP3
// Для того щоб звук відтворювався при кліку відразу без затримки потрібно вибрати файл чеерез js і додати йому поде currentTime = 0;
// (document.querySelector(клас).currentTime = 0)
let card;
let start = document.querySelector('.start');
let x = 0;
let timeInt;

let gameAddDF = () => {
  timeInt = setInterval(count, 1000);
  document.querySelector('.game').style.display = 'flex';
  start.style.display = 'none';
  document.querySelector('.track').play();

}
start.addEventListener('click', gameAddDF);

card = document.querySelectorAll('.card');

card.forEach(el => el.style.order = Math.floor(Math.random() * 24));

let title = false;
let oneCard;
let twoCard;


function addClassFlip() {
  this.classList.add('flip');
  document.querySelector('.flipSound').currentTime = 0;
  document.querySelector('.flipSound').play();
  if (title === false) {
    oneCard = this;
    title = true;
    document.querySelector('.flipSound').play();
  } else {
    twoCard = this;
    title = false;
    compareCards(oneCard, twoCard);
    document.querySelector('.flipSound').play();
  }


};
card.forEach(el => el.addEventListener('click', addClassFlip));


function compareCards(one, two) {
  if (one.dataset.name === two.dataset.name&& one!==two) {
    x += 1;
    setTimeout(function () {
      one.style.opacity = '0';
      two.style.opacity = '0';
      win();
    }, 500);

  } else {
    setTimeout(function () {
      one.classList.remove('flip');
      two.classList.remove('flip');
    }, 500);

  }
};
console.log(x);

function win() {
  if (x === 12) {
    alert('you win!!!')
  }
};



document.querySelector('.time');
let deadline = Date.now() + 120000;
let timer;

function count() {
  timer = deadline - Date.now();

  let seconds = Math.floor(timer / 1000 % 60);
  let minutes = Math.floor(timer / 1000 / 60 % 60);

  let minutesText = document.querySelector('.minutes');
  let secondsText = document.querySelector('.seconds');

  seconds < 10 ? secondsText.textContent = `0${seconds}` : secondsText.textContent = seconds;
  minutes < 10 ? minutesText.textContent = `0${minutes} :` : minutesText.textContent = minutes;
  if (timer < 0) {
    clearInterval(timeInt);
    lose();
  }
};

function lose() {
  alert('YOU LOSE');
};