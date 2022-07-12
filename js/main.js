'use strict';
// console.log('main.js');

// nusitaikymai
const btn1El = document.getElementById('btn-click');
if (!btn1El) throw 'nera btn1El';
const flexEl = document.getElementById('flex');
if (!flexEl) throw 'nera flexEl';
const btnDark = document.getElementById('btn-dark');
if (!btnDark) throw 'nera btnDark';
const h1El = document.querySelector('h1');
if (!h1El) throw 'nera h1Elh1Els';

let count = 0;
function showClick() {
  count++;
  console.log(`paspausta ${count}`);
}
console.log('btn1El ===', btn1El);
btn1El.addEventListener('click', showClick);
btn1El.addEventListener('mouseenter', showClick);

// console.log('showClick ===', showClick);

// flex dezutei eventas

flexEl.addEventListener('click', flexClick);

// document.body.addEventListener('click', flexClick);

function flexClick(event) {
  const elAntKurioPaspaudziau = event.target;
  console.log(elAntKurioPaspaudziau);
  if (elAntKurioPaspaudziau.className === 'card') {
    console.log('card');
    elAntKurioPaspaudziau.style.backgroundColor = 'tomato';
    elAntKurioPaspaudziau.textContent += ' sp';
  }
}

// h1TitleChange();
// console.log('blue ===', blue);
// btnDark.addEventListener('click', h1TitleChange);
// anonimine funkcija function () {}
btnDark.addEventListener('click', function () {
  h1El.style.backgroundColor = 'tomato';
});

// function hoisting - tik kai yra function declaration
// funkcijos pernesamos i failo virsu
// function h1TitleChange() {
//   h1El.style.backgroundColor = 'tomato';
// }

// const blue = 45;