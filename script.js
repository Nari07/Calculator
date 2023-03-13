
const buttons = document.getElementsByClassName('number');
const displayBox = document.getElementById('displayBox');
let buttonVal;

console.log(buttons);

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

for (i = 0; i <buttons.length; i++){
  buttons[i].addEventListener('click', displayValue)
}

function displayValue(e){
  buttonVal = e.target.value;
  displayBox.innerHTML = buttonVal;
  console.log(buttonVal)
}

