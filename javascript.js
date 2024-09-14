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

const changeDisplay = function(){
    const display = document.querySelector(".display");
    display.style.color = "blue";
}

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