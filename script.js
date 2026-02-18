function add(a, b) {
    return a + b;  
};

function substract(a, b) {
    return a - b;  
};

function multiply(a, b) {
    return a * b;  
};

function divide(a, b) {
    return a / b;  
};

let firstNumber;
let operator;
let secondNumber;

function operate(a, b) {
    if (operator = +) return add(a, b);
    if (operator = -) return substract(a, b);
    if (operator = x) return multiply(a, b);
    if (operator = /) return divide(a, b);
}

function operate(a, b) {
    switch (operator) {
        case plus:
            return add(a, b);
            break;
        case minus:
            return substract(a, b);
            break;
        case times:
            return multiply(a, b);
            break;  
        case divider:
            return divide(a, b);
            break;
    }
}


let firstNumber = 0;
let display = document.getElementById("display");

function getFirstNumber() {
    display.textContent = "test";
}

let button = document.querySelectorAll("button");

button.forEach((btn) => {
btn.addEventListener("click", getFirstNumber);
});

/*

function getFirstNumber() {
    let input = document.querySelector("#button").value;
    firstNumber += input;
    document.getElementById("#display").textContent = `${firstNumber}`;
    return firstNumber;
}

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let display = document.getElementById("display");
    display.textContent = event.target.value;
  })})


button.addEventListener("click", (event) => {
    event.preventDefault();
    getFirstNumber();
});


button.addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.querySelector("#button").value;
    return input;
}); */

document.getElementById("#display").textContent = `${firstNumber} ${operator} ${secondNumber}`;