document.querySelectorAll('.number')
    .forEach( el => el.addEventListener('click', clickNumber) );
document.querySelector('.plus').addEventListener('click', plus);
document.querySelector('.minus').addEventListener('click', minus);
document.querySelector('.divide').addEventListener('click', divide);
document.querySelector('.multiply').addEventListener('click', multiply);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}

function plus() {
    display.value += '+';
}

function minus() {
    display.value += '-';
}

function divide() {
    display.value += '/';
}

function multiply() {
    display.value += '*';
}

function reset() {
  display.value = '';
}

function calc() {
    display.value = eval(display.value);
}