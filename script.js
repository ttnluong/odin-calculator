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

*/

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")

let firstNumber = "";
let secondNumber = "";
let operator = [];
let result = null;
let lastOperator;

numbers.forEach((btn) => {
btn.addEventListener("click", (event) => {
    if (operator.length == 0 && result === null) {
        return getFirstNumber(event);
    } else if (operator[operator.length - 1] == "=") {
        firstNumber += event.target.value;
        operator = [];
        result = null;
        console.log();
    } else {
        return getSecondNumber(event);
    }
});
});

function getFirstNumber(event) {
    firstNumber += event.target.value;
    display.textContent = firstNumber;
    console.log(firstNumber);
};

function getSecondNumber(event) {
    secondNumber += event.target.value;
    display.textContent = secondNumber;
    console.log(secondNumber);
};

operators.forEach((btn) => {
btn.addEventListener("click", (event) => {
    if (secondNumber === "") {
        return getOperator(event);
    } else {
        lastOperator = operator[operator.length - 1];
        operator.push(event.target.value);
        console.log(operator);
        return operate();
    }
});
});

function getOperator(event) {
    operator.push(event.target.value);
    display.textContent = firstNumber;
    console.log(operator);
};

equal.addEventListener("click", (event) => {
    operator.push(event.target.value);
    lastOperator = operator[operator.length - 2];
    console.log(operator);
    operate();
});

clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = [];
    result = null;
    display.textContent = "";
});

// why does operate() not take in variables when I write: operate(var1, var2)?
function operate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    switch (lastOperator) {
        case "+":
            result = num1 + num2;
            display.textContent = result;
            console.log(`${firstNumber} ${lastOperator} ${secondNumber} = ${result}`);
            return updateNumbers();
        case "-":
            result = num1 - num2;
            display.textContent = result;
            console.log(`${firstNumber} ${lastOperator} ${secondNumber} = ${result}`);
            return updateNumbers();
        case "x":
            result = num1 * num2;
            display.textContent = result;
            console.log(`${firstNumber} ${lastOperator} ${secondNumber} = ${result}`);
            return updateNumbers();
        case "/":
            result = num1 / num2;
            display.textContent = result;
            console.log(`${firstNumber} ${lastOperator} ${secondNumber} = ${result}`);
            return updateNumbers();
    }
}

function updateNumbers() {
    firstNumber = result;
    secondNumber = "";
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