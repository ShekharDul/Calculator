// functions for each operation
function addition(num1, num2){
  console.log("Num1: " + num1 + "Num2: " + num2);
  let result = num1 + num2;
  return result;
}

function subtraction(num1, num2){
  let result = num1 - num2;
  return result;
}

function multiplication(num1,num2) {
  let result = num1 * num2;
  return result;
}

function division(num1, num2) {
  let result = num1 / num2;
  return result 
}
//

let query = [];
let operator;
let calcValue;
let isCalculationComplete = false;
// code for calling a mathematical operation
function operate (num1, num2, operator) {
  if (operator == '+'){
    calcValue = addition();
  } else if (operator == '-') {
    calcValue = subtraction();
  } else if (operator == '*') {
    calcValue = multiplication();
  } else if (operator == '/'){
    calcValue = division();
  }
  return calcValue;
}
//

//Add event listeners to each button
let button = document.getElementsByClassName('buttons');
let displayClickedButton = document.getElementById('display-clicked-buttons');
 
let queryOne = [];
let queryTwo = [];
let arrOfBothQueries = [];
let operatorPosition;
let typeOfOperator;
for (i = 0; i<button.length; i++) {
  button[i].addEventListener('click', function(){
      query.push(this.innerText);
      displayClickedButton.innerText = query.join('');
      if (this.innerText === '=') {
        arrOfBothQueries = querySeparator(query);
        num1 = arrOfBothQueries[0].join('');
        num2 = arrOfBothQueries[1].join('');
        num1 = parseInt(num1);
        num2 = parseInt(num2);
          if( arrOfBothQueries[2] === '+'){
            displayClickedButton.innerText = addition(num1, num2);
            isCalculationComplete = true;
          } else if (arrOfBothQueries[2] === '-') {
          displayClickedButton.innerText = subtraction(num1, num2);
          isCalculationComplete = true;
          } else if (arrOfBothQueries[2] === '*') {
          displayClickedButton.innerText = multiplication(num1. num2);
          isCalculationComplete = true;
          } else if (arrOfBothQueries[2] === '/') {
          displayClickedButton.innerText = division(num1, num2);
          isCalculationComplete = true;
          }
      } else if ( this.innerText === 'c') {
        clearDisplay();
        query = [];
      }
    }
)};


function querySeparator(query) {
  for ( let i = 0; i < query.length; i++) {
    if (query[i] === '+' || query[i] === '-' || query[i] === '/' || query[i] === '*') {
      operatorPosition = i ;
      typeOfOperator = query[i];
      queryOne = query.slice(0, operatorPosition);
      queryTwo = query.slice(operatorPosition + 1, query.length -1 );
    }
  }
  return [queryOne, queryTwo, typeOfOperator];
}

function clearDisplay(){
  displayClickedButton.innerText = '';
}