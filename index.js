const displayAboveValue = document.getElementById('above-value');
const displayActualValue = document.getElementById('actual-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayAboveValue, displayActualValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});