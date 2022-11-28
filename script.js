let firstNumber = "";
let secondNumber = "";
let action = "";

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const sign = ["×", "÷", "+", "-", "/"];
const result = document.querySelector("#input");
const operation = document.querySelector("#operation");


document.querySelector(".calc-button-container").addEventListener("click", doNumbers);
document.querySelector("#total").addEventListener("click", doCalculation);
document.querySelector(".ac").addEventListener("click", ac);
document.querySelector("#back").addEventListener("click", back);
document.querySelector("#percent").addEventListener("click", percent);
document.querySelector("#reverse").addEventListener("click", reverse);  
document.addEventListener ("keypress", keyboardWork);

  
function doNumbers (event) {
  let inputValue;
  if (event.type == "click") {
    inputValue = event.target.textContent; 
  }
  else if (event.type == "keypress")
  {
    inputValue = event.key;
  } 
    
    if (digit.includes(inputValue)) {
      if (secondNumber == "" && action == "") {
        firstNumber += inputValue;
        result.textContent = firstNumber;
      } else if (firstNumber !== "" && action !== "") {
        secondNumber += inputValue;
        result.textContent = secondNumber;
      }
    } else if (firstNumber !== "" && secondNumber) {
      doCalculation();
    }
 
    if (sign.includes(inputValue)) {
      if (secondNumber == "") {
        action = inputValue;
        operation.textContent = firstNumber;
        operation.textContent += action;
      }
    }
  };

function doCalculation() {
  switch (action) {
    case "+":
      firstNumber = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      firstNumber = Number(firstNumber) - Number(secondNumber);
      break;
    case "÷":
    case "/":
      if (secondNumber == "0") {
        result.textContent = "Error. Divide by 0";
        firstNumber = "";
        secondNumber = "";
        action = "";
      } else firstNumber = Number(firstNumber) / Number(secondNumber);
      break;
    case "×":
      firstNumber = Number(firstNumber) * Number(secondNumber);
      break;
      }
  operation.textContent += secondNumber;
  secondNumber = "";

  if (Number.isInteger(firstNumber) == false) {
    firstNumber = Number(firstNumber.toFixed(2));
  }
  result.textContent = firstNumber;
};

function ac() {
  firstNumber = "";
  secondNumber = "";
  action = "";
  result.textContent = 0;
  operation.textContent = "";
};

function back() {
  if (secondNumber == "") {
    let onScreen = result.textContent;
    firstNumber = onScreen.substring(0, onScreen.length - 1);
    result.textContent = firstNumber;
  } else {
    let onScreen = result.textContent;
    secondNumber = onScreen.substring(0, onScreen.length - 1);
    result.textContent = secondNumber;
  }
};

function percent() {
  if (firstNumber !== "" && action) {
    secondNumber = firstNumber * (secondNumber / 100);
    if (Number.isInteger(secondNumber) == false) {
      secondNumber = secondNumber.toFixed(2);
    }
    result.textContent = secondNumber;
  }
};

function reverse() {
  if (secondNumber == "") {
    firstNumber *= -1;
    result.textContent = firstNumber;
  } else {
    secondNumber *= -1;
    result.textContent = secondNumber;
  }
};

function keyboardWork (event) {
  if (event.key == 'Delete' || event.code == 'Backspace') {
    back();
  }
  if (event.Keycode == 27 || event.key === "Escape" || event.key === "Esc") {
    ac();
  }
  else {
    doNumbers(event);
  }
};







  


