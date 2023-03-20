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
  displayCalculation.innerHTML = displayCalculation.textContent + displayVal;
  displayInput.innerHTML =  displayInput.textContent + displayVal;//
}



function getInput(operation){
	input = Number(displayInput.innerHTML);
  const objToPush = {number: input, operator: operation};
  arr.push(objToPush);
  console.log(arr);
  return arr;
}


equal.addEventListener('click', function(){getInput('equals')} );
equal.addEventListener('click', operate);
equal.addEventListener('click', () => {
		equalClicked = true;
   	updateDisplay();
})


function clearDisplay(){
	displayInput.innerHTML = '';
}

function updateDisplay(){
	if (equalClicked === true){
     displayInput.innerHTML = sum
     displayCalculation.innerHTML = displayCalculation.textContent + ' = ' + sum;
  } else {
  	displayInput.innerHTML = sum;
  }
}

AC.addEventListener('click', () => {
	clearDisplay();
  displayCalculation.innerHTML = '';
  arr = [];
})

/* for (i = 0; i <operators.length; i++){
  operators[i].addEventListener('click', updateDisplay)
} */

//operators
function add(a, b){
	 arr.reduce((a, b) =>{
   	sum = a + b;
    return sum;
   }, 0)
   /*  a = input;
    b = Number(displayInput.textContent);
    sum = a + b; */
}

function subtract(a, b){
  console.log(arr);
  arr.reduce((a, b) =>{
    console.log
   	sum = a - b;
    return sum;
   }, 0)
  
  /* a = input;
  b = Number(displayInput.textContent);
  sum = (a - b);
  return sum; */
}
function multiply(a, b){
  arr.reduce((a, b) =>{
   	sum = a * b;
    return sum;
   }, 1)
  /* a = input;
  b = Number(displayInput.textContent);
  sum = a * b;
  return sum; */
}

function divide(a, b){
  arr.reduce((a, b) =>{
   	sum = a / b;
    return sum;
   }, 1)
  /* a = input;
  b = Number(displayInput.textContent);
  sum = a / b;
  return sum; */
}


for (i = 0; i <operators.length; i++){
  operators[i].addEventListener('click', operate)
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



function operate(operator, a, b){
  operator = operatorChosen;
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


