const body = document.querySelector("body");
const result = document.querySelector(".result-screen");
const AC = document.querySelector(".AC-btn");
const C = document.querySelector(".C-btn");
const divide = document.querySelector(".divide-btn");
const mutiple = document.querySelector(".multiple-btn");
const minus = document.querySelector(".minus-btn");
const plus = document.querySelector(".plus-btn");
const equal = document.querySelector(".equal-btn");
const dot = document.querySelector(".dot-btn");
const plusMinus = document.querySelector(".plus-minus-btn");
const item = document.querySelectorAll(".js-item")

let currentResult = "";
let mode = "";

function deleteBack() {
    if(currentResult !== null){
        currentResult = currentResult.slice(0, -1);
        result.innerHTML = currentResult;
    }
}

function clearAll() {
    result.innerHTML = ""
    currentResult = "";
    mode = "";
}

function calculate() {
    if(mode === "divide") {
        result.innerHTML = tempNum / parseFloat(currentResult);
    } else if(mode === "multiple") {
        result.innerHTML = tempNum * parseFloat(currentResult);
    } else if(mode === "plus") {
        result.innerHTML = tempNum + parseFloat(currentResult);
    } else if(mode === "minus") {
        result.innerHTML = tempNum - parseFloat(currentResult);
    }
    currentResult = result.innerHTML;
}

function calculateDivide() {
    mode = "divide";
}

function calculateMutiple() {
    mode = "multiple";
}

function calculatePlus() {
    mode = "plus";
}

function calculateMinus() {
    mode = "minus";
}

function saveTempNum() {
    tempNum = parseFloat(currentResult);
    console.log(tempNum);
    currentResult = "";
    result.innerHTML = "";
}

function enterNumber(num) {
    result.innerHTML += num;
    currentResult = result.innerHTML;
    console.log(currentResult);
}

function handleButtonClick(event) {
    if(event.target === divide){
        saveTempNum();
        calculateDivide();
    } else if(event.target === mutiple){
        saveTempNum();
        calculateMutiple();
    } else if(event.target === plus){
        saveTempNum();
        calculatePlus();
    } else if(event.target === minus){
        saveTempNum();
        calculateMinus();
    } else if(event.target === equal){
        calculate();
    } else if(event.target === AC){
        clearAll();
    } else if(event.target === C){
        deleteBack();
    } else {
        enterNumber(event.target.innerText);
    }
}

function init() {
    item.forEach(i => i.addEventListener("click", handleButtonClick));
}

init();