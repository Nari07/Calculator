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
let arr = [];


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
	displayInput.innerHTML = '';
}

function getInput(operation){
  input = Number(displayInput.innerHTML);
  const objToPush = {number: input, operator: operation};
  arr.push(objToPush);
  console.log(arr);
  return arr;
}

function updateDisplay(){
	if (equalClicked === true){
     displayInput.innerHTML = sum;
     displayCalculation.innerHTML = displayCalculation.textContent + ' = ' + sum;
  } else {
  	displayInput.innerHTML = sum;
  }
}

equal.addEventListener('click', function(){getInput('equals')} );
equal.addEventListener('click', getNumbers);
equal.addEventListener('click', () => {
		equalClicked = true;
   	updateDisplay();
})

AC.addEventListener('click', () => {
	clearDisplay();
  displayCalculation.innerHTML = '';
  arr.length = 0;
  sum = undefined;
})

/* for (i = 0; i <operators.length; i++){
  operators[i].addEventListener('click', updateDisplay)
} */

//operators
function add(a, b){
  /*  a = input;
   b = Number(displayInput.textContent); */
   sum = a + b;
   return sum;
}

function subtract(a, b){
 /*  a = input;
  b = Number(displayInput.textContent); */
  sum = (a - b);
  return sum;
}
function multiply(a, b){
/*   a = input;
  b = Number(displayInput.textContent); */
  sum = a * b;
  return sum;
}

function divide(a, b){
/*   a = input;
  b = Number(displayInput.textContent); */
  sum = Number((Math.round((a/b) * 100) / 100).toFixed(3)) // round to 3 decimal places
}

addButton.addEventListener('click', () => {
	operatorChosen = 'add';
  getInput(operatorChosen);
  clearDisplay()
  displayCalculation.innerHTML = displayCalculation.textContent + ' + ';
});
subtractButton.addEventListener('click', () => {
	operatorChosen = 'subtract';
  getInput(operatorChosen);
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' - ';
});
multiplyButton.addEventListener('click', () => {
	operatorChosen = 'multiply';
  getInput(operatorChosen);
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' x ';
});
divideButton.addEventListener('click', () => {
	operatorChosen = 'divide';
  getInput(operatorChosen);
  clearDisplay();
  displayCalculation.innerHTML = displayCalculation.textContent + ' ÷ ';
});

// for (i = 0; i <operators.length; i++){
//   operators[i].addEventListener('click', getNumbers)
// }

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

function getNumbers(){
  for (i = 0; i < arr.length - 1; i++){
    operator = arr[i].operator;  
    if (sum === undefined){
    	a = arr[i].number;
  		b = arr [i + 1].number;
    } else {
    	a = sum;
      b = arr [i + 1].number;
    }  
    console.log(a, b, operator)
    console.log(sum);
    operate(operator, a, b);
  }
 }