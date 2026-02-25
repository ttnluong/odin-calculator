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
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const del = document.querySelector(".delete");

let firstNumber = "";
let secondNumber = "";
let operator = [];
let result = null;
let lastOperator;

numbers.forEach((number) => {
number.addEventListener("click", (event) => {
    if (operator.length == 0 && result === null) {
        return getFirstNumber(event);
    } else if (operator[operator.length - 1] == "=") {
        return resetCalculation(event);
    } else {
        return getSecondNumber(event);
    }
});
});

function getFirstNumber(event) {
    firstNumber += event.target.value;
    display.textContent = firstNumber;
};

function resetCalculation(event) {
    firstNumber += event.target.value;
    display.textContent = firstNumber;
    operator = [];
    result = null;
}

function getSecondNumber(event) {
    secondNumber += event.target.value;
    display.textContent = secondNumber;
};

operators.forEach((operator) => {
operator.addEventListener("click", (event) => {
    if (secondNumber === "") {
        return getOperator(event);
    } else if (secondNumber !== "" && result === null) {
        return operateWithFirstNumber(event);
    } else {
        return operateWithResult(event);
    }
});
});

function getOperator(event) {
    operator.push(event.target.value);
};

function operateWithFirstNumber(event) {
    lastOperator = operator[operator.length - 1];
    operator.push(event.target.value);
    return operate();
};

function operateWithResult(event) {
    firstNumber = result;
    lastOperator = operator[operator.length - 1];
    operator.push(event.target.value);
    return operate();
}

equal.addEventListener("click", (event) => {
    if (result === null) {
        operator.push(event.target.value);
        lastOperator = operator[operator.length - 2];
        operate();
    } else {
        firstNumber = result;
        operator.push(event.target.value);
        lastOperator = operator[operator.length - 2];
        operate();
    }
});

clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = [];
    result = null;
    display.textContent = "";
});

dot.addEventListener("click", (event) => {
    if (display.textContent.includes(".")) {
        return;
    } else if (operator.length == 0 && result === null) {
        firstNumber += event.target.value;
        display.textContent = firstNumber;
    } else {
        secondNumber += event.target.value;
        display.textContent = secondNumber;
    }
});

del.addEventListener("click", () => {
    if (secondNumber === "" && result === null) {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber;
    }
});


function operate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    switch (lastOperator) {
        case "+":
            result = num1 + num2;
            display.textContent = result;
            return resetNumbers();
        case "-":
            result = num1 - num2;
            display.textContent = result;
            return resetNumbers();
        case "x":
            result = num1 * num2;
            display.textContent = result;
            return resetNumbers();
        case "/":
            result = num1 / num2;
            display.textContent = result;
            return resetNumbers();
    }
}

function resetNumbers() {
    firstNumber = "";
    secondNumber = "";
}



/*

TO DO: add keyboard support

*/