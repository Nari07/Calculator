const buttons = document.getElementsByClassName('number');
const displayCalculation = document.getElementById('displayCalculation');
const displayInput = document.getElementById('displayInput');
const addButton = document.getElementById('addButton');
const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const AC = document.getElementById('AC');
const equal = document.getElementById('equal');
const operators = document.getElementsByClassName('operator');
let sum;
let displayVal;
let input;
let operatorChosen;
let equalClicked;
let total; 


//Displayed numbers
for (i = 0; i <buttons.length; i++){
  buttons[i].addEventListener('click', displayValue)
}

function displayValue(e){
  displayVal = e.target.value;
  if (equalClicked === true){
  	clearDisplay();
    displayCalculation.innerHTML = '';
    displayCalculation.innerHTML = displayCalculation.textContent + displayVal;
    displayInput.innerHTML =  displayInput.textContent + displayVal;
    equalClicked = false;
  } else {
    displayCalculation.innerHTML = displayCalculation.textContent + displayVal;
    displayInput.innerHTML =  displayInput.textContent + displayVal;
  }
}

function clearDisplay(){
  input = Number(displayInput.innerHTML);
	displayInput.innerHTML = '';
}

function updateDisplay(){
	if (equalClicked === true){
     displayInput.innerHTML = sum;
     displayCalculation.innerHTML = displayCalculation.textContent + ' = ' + sum;
  }
}

AC.addEventListener('click', () => {
    clearDisplay();
    displayCalculation.innerHTML = '';
    sum = undefined;
    input = undefined;
    operatorChosen = undefined;
})

//Operators
function add(a, b){
   sum = a + b;
   return sum;
}

function subtract(a, b){
  sum = a - b;
  return sum;
}
function multiply(a, b){
  sum = a * b;
  return sum;
}

function divide(a, b){
  sum = Number((Math.round((a/b) * 100) / 100).toFixed(3)) // round to 3 decimal places
  return sum;
}

addButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'add';
  }
  
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' + ';
  
  if (sum === undefined){
    a = 0;
    b = input;
  } else {
    a = sum;
    b = input; 
  }
  operate(operatorChosen, a, b);
  console.log("input: " + input);
  console.log("total:" + sum);
  operatorChosen = 'add';
});

subtractButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'subtract';
  }

  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' - ';
  if (sum  === undefined){
    a = input;
    b = 0;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
  console.log("input: " + input);
  console.log("total:" + sum);
  operatorChosen = 'subtract';

});
multiplyButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'multiply';
  }
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' x ';
  if (sum === undefined){
    a = 1;
    b = input;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
  console.log("input: " + input);
  console.log("total:" + sum);
  operatorChosen = 'multiply';

});
divideButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'divide';
  }
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' ÷ ';
  if (sum === undefined){
    a = input;
    b = 1;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
  console.log("input: " + input);
  console.log("total:" + sum);
  operatorChosen = 'divide';

});

function operate(operator, a, b){
  if (operator === 'subtract'){
    subtract(a, b);
  } else if (operator === 'add'){
    add (a, b);
  } else if (operator === 'divide'){
    divide(a, b);
  } else if (operator === 'multiply'){
    multiply(a, b);
  }
}

equal.addEventListener('click', () => {
  clearDisplay();
  equalClicked = true;
  operate(operatorChosen, sum, input);
  updateDisplay();
})