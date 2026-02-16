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