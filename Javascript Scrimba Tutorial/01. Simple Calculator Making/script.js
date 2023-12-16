let num1 = document.getElementById("num1").innerText=8;
let num2 = document.getElementById("num2").innerText=2;

let result = document.getElementById("result");

function add() {
   let sum = num1 + num2; 
   let finalResult = "Sum - " + sum;
    result.innerText=finalResult;
}

function subtract() {
    let subtract = num1 - num2;
    let finalResult = "Subtract - " + subtract;
    result.innerText=finalResult;
}

function divide() {
    let divide = num1 / num2; 
    let finalResult = "Divide - " + divide;
    result.innerText=finalResult;
}

function multiply() {
    let multply = num1 * num2;
    let finalResult = "Multiply - " + multply;
    result.innerText=finalResult;
}