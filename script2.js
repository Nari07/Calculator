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
const decimal = document.getElementById('decimal');
const delButton = document.getElementById('Del');
const sumBox = document.getElementById('sumBox');
const percent = document.getElementById('percent');


let sum 
let input 
let operatorChosen 
let displayVal;
let equalClicked;
let decimalClicked;


//Displayed numbers
for (i = 0; i <buttons.length; i++){
  buttons[i].addEventListener('click', displayValue)
}

function displayValue(e){
  displayVal = e.target.value;
  displayCalculation.innerHTML = displayCalculation.textContent + displayVal;
  displayInput.innerHTML =  displayInput.textContent + displayVal;
  sumBox.textContent = '';
}   

function clearDisplay(){
	input = Number(displayInput.innerHTML);
	displayInput.innerHTML = '';
}


function updateDisplay(){
	if (equalClicked === true && sum !== undefined){
    displayInput.innerHTML = sum;
    displayCalculation.innerHTML = displayCalculation.textContent + ' = ' + sum;
  } else if (equalClicked === true && sum === undefined){
  	displayInput.innerHTML = 'ERROR';
    displayCalculation.innerHTML = '';
  }
}

function displaySum(){
	displayInput.innerHTML = '';
	displayInput.innerHTML = Number(sum);
}


//other buttons
percent.addEventListener('click', () =>{
	sum = sum / 100;
  displayInput.innerHTML = sum;
})

function disableDecimal(){
	if (decimalClicked === true){
  	decimal.disabled = true;
    decimalClicked = false;
  } else {
  	decimal.disabled = true;
  }
}

decimal.addEventListener('click', () =>{
	decimal.disabled = false;
  displayInput.innerHTML = displayInput.textContent + '.';
  displayCalculation.innerHTML = displayCalculation.textContent + '.';
  decimalClicked = true;
  disableDecimal();
})

for (i = 0; i < operators.length; i++){
  operators[i].addEventListener('click', () => {
  	decimal.disabled = false;
		decimalClicked = false;
  })
} 

AC.addEventListener('click', () => {
  clearDisplay();  
  displayCalculation.innerHTML = '';
  sumBox.textContent = '';
  sum = undefined;
  input = undefined;
  operatorChosen = undefined;
  equalClicked = false;
  decimal.disabled = false;
})

equal.addEventListener('click', () => {
  clearDisplay();
  equalClicked = true;
  operate(operatorChosen, sum, input);
  updateDisplay();
  sumBox.innerHTML = '';
  operatorChosen = undefined;
  decimal.disabled = false;
})

delButton.addEventListener('click', () => {
   let inputString= displayInput.textContent.toString();
   let result = inputString.slice(0, inputString.length - 1);
   displayInput.innerHTML = Number(result);
   
   let calcString= displayCalculation.textContent.toString();
   let result2 = calcString.slice(0, calcString.length - 1);
   displayCalculation.textContent = result2;
})
 
//Operators

function add(a, b){
   sum = Number((Math.round((a + b) * 100)/100).toFixed(3));
   return sum;
}
equalClicked = false;
function subtract(a, b){
  sum = Number((Math.round((a - b) * 100)/100).toFixed(3));
  return sum;
}
function multiply(a, b){
  sum = Number((Math.round((a * b) * 100)/100).toFixed(3));
  return sum;
}

function divide(a, b){
  sum = Number((Math.round((a/b) * 100) / 100).toFixed(3)); // round to 3 decimal places
  return sum;
}

addButton.addEventListener('click', () => {
  if(operatorChosen === undefined){
    operatorChosen = 'add';
  }  
	
  clearDisplay();
	
  if (equalClicked === true){
    input = 0;
    equalClicked = false;
  }
  
  if (sum === undefined){
  	displayCalculation.innerHTML = displayCalculation.textContent + ' + ';
  } else {
  		displayCalculation.innerHTML = 'ANS' + ' + ';
  }

  if (sum === undefined){
    a = 0;
    b = input;
  } else {
    a = sum;
    b = input; 
  }
  operate(operatorChosen, a, b);
  operatorChosen = 'add';
  sumBox.textContent = sum;
});

subtractButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'subtract';
  }

  clearDisplay();

  if (equalClicked === true){
    input = 0;
    equalClicked = false;
  }

  if (sum === undefined){
  	displayCalculation.innerHTML = displayCalculation.textContent + ' - ';
  } else {
  		displayCalculation.innerHTML = 'ANS' + ' + ';
  }

  if (sum  === undefined){
    a = input;
    b = 0;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
  sumBox.textContent = sum;

});
multiplyButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'multiply';
  }
  clearDisplay();

  if (equalClicked === true){
    input = 1;
    equalClicked = false;
  }

  if (sum === undefined){
  	displayCalculation.innerHTML = displayCalculation.textContent + ' x ';
  } else {
  		displayCalculation.innerHTML = 'ANS' + ' + ';
  }

  if (sum === undefined){
    a = 1;
    b = input;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
  operatorChosen = 'multiply';
  sumBox.textContent = sum;

});
divideButton.addEventListener('click', () => {
  if(operatorChosen === undefined) {
    operatorChosen = 'divide';
  }
  clearDisplay();

  if (equalClicked === true){
    input = 1;
    equalClicked = false;
  }

  if (sum === undefined){
  	displayCalculation.innerHTML = displayCalculation.textContent + ' ÷ ';
  } else {
  		displayCalculation.innerHTML = 'ANS' + ' + ';
  }

  if (sum === undefined){
    a = input;
    b = 1;
  } else {
    a = sum;
    b = input;
  }
  operate(operatorChosen, a, b);
	operatorChosen = 'divide';
  sumBox.textContent = sum;

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