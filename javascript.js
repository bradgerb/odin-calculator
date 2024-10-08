let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
let firstString = "";
let secondString = "";
let decimalFlag = 0;

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
    if (operator > 0 && secondString !=""){
        operate();
    };
    operator = 1;
}

const subtractBtn = function(){
    if (operator > 0 && secondString !=""){
        operate();
    };
    operator = 2;
}

const productBtn = function(){
    if (operator > 0 && secondString !=""){
        operate();
    };
    operator = 3;
}

const divideBtn = function(){
    if (operator > 0 && secondString !=""){
        operate();
    };
    operator = 4;
}

const setDecimal = function(){
    if (operator === 0){
        if (firstString.includes(".")){
            return
        }
        else{
            changeDisplay(".");
        };
    }else{
        if (secondString.includes(".")){
            return
        }else{
            changeDisplay(".");
        };
    }
}

const resetValues = function(){
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
    firstString = "";
    secondString = "";
    decimalFlag = 0;
}

const clear = function(){
    resetValues();
    changeDisplay("0");
}

const setNegative = function(){
    if (operator === 0){
        firstString = parseFloat(-firstString);
        changeDisplay("");
    }else{
        secondString = parseFloat(-secondString);
        changeDisplay("");
    };
}

const percentBtn = function(){
    if (operator === 0){
        firstString = parseFloat(firstString/100);
        changeDisplay("");
    }else{
        secondString = parseFloat(secondString/100);
        changeDisplay("");
    };
}

const operateBtn = function(){
    if (operator > 0){
        operate();
        resetValues();
    }
}

const changeDisplay = function(a){
    if (operator === 0){
        if (firstString === "0"){
            firstString = "";
        }
        firstString = firstString + a;
        firstNumber = parseFloat(firstString);
        firstString = firstString.slice(0, 9);
        display.textContent = firstString;
    }else{
        secondString = secondString + a;
        secondNumber = parseFloat(secondString);
        secondString = secondString.slice(0, 9);
        display.textContent = secondString;
    };
}

const operate = function(){
    if (operator === 1){
        firstString = sum(firstNumber, secondNumber);
        operator = 0;
        secondString = "";
        changeDisplay("");
    }else if (operator === 2){
        firstString = subtract(firstNumber, secondNumber);
        operator = 0;
        secondString = "";
        changeDisplay("");
    }else if (operator === 3){
        firstString = product(firstNumber, secondNumber);
        operator = 0;
        secondString = "";
        changeDisplay("");
    }else if (operator === 4){
        if (secondNumber === 0){
            display.textContent = "Plz don't";
            resetValues();
        } else{
            firstString = divide(firstNumber, secondNumber);
            operator = 0;
            secondString = "";
            changeDisplay("");
        }
    };
}

const display = document.querySelector(".display");

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
const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", subtractBtn);
const productButton = document.querySelector(".product");
productButton.addEventListener("click", productBtn);
const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", divideBtn);
const operateButton = document.querySelector(".equal");
operateButton.addEventListener("click", operateBtn);
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", setDecimal);
const negativeButton = document.querySelector(".negative");
negativeButton.addEventListener("click", setNegative);
const percentButton = document.querySelector(".percent");
percentButton.addEventListener("click", percentBtn);
