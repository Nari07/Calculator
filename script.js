const buttons = document.querySelector('input');
const displayBox = document.getElementById('displayBox');
let buttonValue = document.querySelector('input').value;

function add(a, b){
	let sum = 0;
  sum = sum + a + b;
  return console.log(sum);
}

function subtract(a, b){
	let sum = 0;
  sum = sum  + (a - b);
  return console.log(sum);
}
function multiply(a, b){
	let sum = 1;
  sum = sum * a * b;
  return console.log(sum);
}

function divide(a, b){
	let sum = 1;
  sum = sum * a / b;
  return console.log(sum);
}

function operate(operator, a, b){
	if (operator === subtract){
  	subtract(a, b);
  } else if (operator === add){
  	add (a, b);
  } else if (operator === divide){
  	divide(a, b);
  } else if (operator === multiply){
  	multiply(a, b);
  }
}

buttons.addEventListener('click', displayValue);

function displayValue {
  displayBox.innerHTML = buttonValue;
}

console.log(buttons);
console.log(buttonValue);