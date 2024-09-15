let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
let firstString = "";
let secondString = "";

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

const setZero = function(){
    changeDisplay(0);
}

const setOne = function(){
    changeDisplay(1);
}

const setTwo = function(){
    changeDisplay(2);
}

const setThree = function(){
    changeDisplay(3);
}

const setFour = function(){
    changeDisplay(4);
}

const setFive = function(){
    changeDisplay(5);
}

const setSix = function(){
    changeDisplay(6);
}

const setSeven = function(){
    changeDisplay(7);
}

const setEight = function(){
    changeDisplay(8);
}

const setNine = function(){
    changeDisplay(9);
}

const sumBtn = function(){
    operator = 1;
}

const clear = function(){
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
    firstString = "";
    secondString = "";
    changeDisplay();
}

const changeDisplay = function(a){
    if (operator === 0){
        const display = document.querySelector(".display");
        firstString = firstNumber.toString() + a;
        firstNumber = parseFloat(firstString);
        display.textContent = firstNumber;
    }else{
        const display = document.querySelector(".display");
        secondString = secondNumber.toString() + a;
        secondNumber = parseFloat(secondString);
        display.textContent = secondNumber;
    };
}

const operate = function(){
    if (operator === 1){
        firstNumber = sum(firstNumber, secondNumber);
        operator = 0;
        secondNumber = 0;
        changeDisplay();
    }else if (operator === 2){
        firstNumber = subtract(firstNumber, secondNumber);
        operator = 0;
        secondNumber = 0;
        changeDisplay();
    }else if (operator === 3){
        firstNumber = product(firstNumber, secondNumber);
        operator = 0;
        secondNumber = 0;
        changeDisplay();
    }else if (operator === 4){
        firstNumber = divide(firstNumber, secondNumber);
        operator = 0;
        secondNumber = 0;
        changeDisplay();
    }
}

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", setZero);
const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", setOne);
const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", setTwo);
const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", setThree);
const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", setFour);
const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", setFive);
const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", setSix);
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", setSeven);
const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", setEight);
const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", setNine);
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);
const sumButton = document.querySelector(".sum");
sumButton.addEventListener("click", sumBtn);
const operateButton = document.querySelector(".equal");
operateButton.addEventListener("click", operate);