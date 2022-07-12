'use strict';
// console.log('main.js');

// nusitaikymai
const btn1El = document.getElementById('btn-click');
if (!btn1El) throw 'nera btn1El';

let count = 0;
function showClick() {
  count++;
  console.log(`paspausta ${count}`);
}
console.log('btn1El ===', btn1El);
btn1El.addEventListener('click', showClick);
btn1El.addEventListener('mouseenter', showClick);

// console.log('showClick ===', showClick);