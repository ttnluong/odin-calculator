/*
function add(a, b) {
    return a + b;  
};

function subtract(a, b) {
    return a - b;  
};

function multiply(a, b) {
    return a * b;  
};

function divide(a, b) {
    return a / b;  
};


function operate(a, b) {
    if (operator = +) return add(a, b);
    if (operator = -) return subtract(a, b);
    if (operator = x) return multiply(a, b);
    if (operator = /) return divide(a, b);
}

function operate(a, b) {
    switch (operator) {
        case plus:
            return add(a, b);
            break;
        case minus:
            return subtract(a, b);
            break;
        case times:
            return multiply(a, b);
            break;  
        case divider:
            return divide(a, b);
            break;
    }
}

*/

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

numbers.forEach((btn) => {
btn.addEventListener("click", getNumbers);
});

function getNumbers(event) {
    if (operator === "") {
        firstNumber += event.target.value;
        display.textContent = firstNumber;
        console.log(firstNumber);
    } else {
        secondNumber += event.target.value;
        display.textContent = secondNumber;
        console.log(secondNumber);
}
};

operators.forEach((btn) => {
btn.addEventListener("click", (event) => {
    if (operator === "" && result === 0) {
        return getOperator(event);
    } else  {
        result = operate();
    } 
});
});

function getOperator(event) {
        operator += event.target.value;
        display.textContent = firstNumber;
        console.log(operator);
     };

equal.addEventListener("click", operate);

// why does operate() not take in variables when I write: operate(var1, var2)?
function operate() {
    let num1 = parseInt(firstNumber);
    let num2 = parseInt(secondNumber);
    switch (operator) {
        case "+":
            result = num1 + num2;
            display.textContent = result;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            display.textContent = result;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case "x":
            result = num1 * num2;
            display.textContent = result;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case "/":
            result = num1 / num2;
            display.textContent = result;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
    }
}


/*


operators.forEach((btn) => {
btn.addEventListener("click", (event) => {
    if (operator === "" && result === 0) {
        return getOperator(event);
    } else if (operator !== "" && result === 0) {
        return operate();
    } else {
        firstNumber = result;
        return operate();
    }
});

 if (result !== "") {
        firstNumber = result;
        return operate();
    }

a > operator > b > operate() = result = new a? > operator > b > operate() = result = new a?


*/