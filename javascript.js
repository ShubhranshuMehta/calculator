const display = document.querySelector(".display");
const result = document.querySelector(".result");
const keyclear = document.querySelector(".clear");
const keyequal = document.querySelector(".keyequal");
// ================================================
var displaytext = '';
let click = 0;
let position;
let previousoperation;
var resultint;
const numlist = Array.from(document.querySelectorAll(".num"));
numlist.forEach((num) => {
    num.addEventListener('click', () => {
        displayfunc(num.textContent);
    });
});

// ================================================


function displayfunc(k) {
    if (click == 1) {
        displaytext += k;
        display.textContent = displaytext;
        result.textContent = displaytext.slice(position + 1, displaytext.length);
        return;
    }
    else {
        displaytext += k;
        display.textContent = displaytext;
        result.textContent = displaytext;
        return;
    }
}
// ================================================

const operationlist = Array.from(document.querySelectorAll(".operation"));
operationlist.forEach((operation) => {
    operation.addEventListener('click', () => {
        click++;
        resultfunc(operation.textContent, operation);
    });
});

// ================================================

function resultfunc(k, operation) {
    if (click == 1) {
        displaytext += k;
        display.textContent = displaytext;
        previousoperation = k;
        position = displaytext.indexOf(`${k}`);
    }
    else {
        resultint = resultoper(parseInt(displaytext), parseInt(result.textContent), previousoperation, operation.textContent);
    }
}

// ================================================

function resultoper(num1, num2, preoper, oper) {
    if (preoper == "+") {
        result.textContent = (num1 + num2);
        if (oper == "=") {
            displaytext = num1 + `${preoper}` + num2 + `${oper}`
        }
        else { displaytext = result.textContent + `${oper}` }

        previousoperation = oper;
        display.textContent = displaytext;
        position = displaytext.indexOf(`${oper}`);
        click = 1;
    }
    if (preoper == "-") {
        result.textContent = (num1 - num2);
        if (oper == "=") {
            displaytext = num1 + `${preoper}` + num2 + `${oper}`
        }
        else { displaytext = result.textContent + `${oper}` }
        previousoperation = oper;
        display.textContent = displaytext;
        position = displaytext.indexOf(`${oper}`);
        click = 1;
    }
    if (preoper == "*") {
        result.textContent = (num1 * num2);
        if (oper == "=") {
            displaytext = num1 + `${preoper}` + num2 + `${oper}`
        }
        else { displaytext = result.textContent + `${oper}` }
        previousoperation = oper;
        display.textContent = displaytext;
        position = displaytext.indexOf(`${oper}`);
        click = 1;
    }
    if (preoper == "/") {
        result.textContent = (num1 / num2);
        if (oper == "=") {
            displaytext = num1 + `${preoper}` + num2 + `${oper}`
        }
        else { displaytext = result.textContent + `${oper}` }
        previousoperation = oper;
        display.textContent = displaytext;
        position = displaytext.indexOf(`${oper}`);
        click = 1;
    }
    return;
}

// ================================================

keyclear.addEventListener('click', () => {
    displaytext = '';
    display.textContent = displaytext;
    result.textContent = displaytext;
})

// ================================================

keyequal.addEventListener('click', () => {
    resultoper(parseInt(displaytext), parseInt(result.textContent), previousoperation, "=");
})