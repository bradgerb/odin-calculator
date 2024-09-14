let firstNumber = 0;
let secondNumber = 0;
let operator = 0;

const sum = function(a, b){
    return a+b
}

const subtract = function(a, b){
    return a-b
}

const product = function(a, b){
    return a*b
}

const divide = function(a, b){
    return a/b
}

const setOne = function(){
    changeDisplay(1);
}

const changeDisplay = function(){
    const display = document.querySelector(".display");
    display.style.color = "blue";
}

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", setOne);