const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");

const isNonZero = /[1-9]/;
const isOperator = /[-+*÷]/;

let expression = "";

// KEYBOARD FUNCTIONALITY: Add event listener for keyboard interactions.
    window.addEventListener("keydown", function(event) {
        if (event.key === "1") { btnPress(1); }
        if (event.key === "2") { btnPress(2); }
        if (event.key === "3") { btnPress(3); }
        if (event.key === "4") { btnPress(4); }
        if (event.key === "5") { btnPress(5); }
        if (event.key === "6") { btnPress(6); }
        if (event.key === "7") { btnPress(7); }
        if (event.key === "8") { btnPress(8); }
        if (event.key === "9") { btnPress(9); }
        if (event.key === "0") { btnPress(0); }
        if (event.key === ".") { btnPress("."); }
        if (event.key === "+") { btnPress("+"); }
        if (event.key === "-") { btnPress("-"); }
        if (event.key === "*") { btnPress("*"); }
        if (event.key === "/") { btnPress("÷"); }
        if (event.ctrlKey && event.key === "c") { clearDisplay(); }
        if (event.ctrlKey && event.key === "x") { cancelExpression(); }
        if (event.key === "Enter") { evaluateExpression(); }
        if (event.key === "Backspace") { backspace(); }11
        });

function btnPress(char){
    //if the button pressed is a number 1-9, add the number to the display.
    //if the button is an operator, clear the display and add the operator to the list of operands

//NON-ZERO: Test if the button pressed was a digit 1-9
    if (isNonZero.test(char)) {
        if (displayEl.innerText === "0") {
            displayEl.innerText = char;
        } else {
            displayEl.innerText += char;
        }
    }

//ZERO: Test if the button pressed was a zero.
    else if (char === 0) {
        if (displayEl.innerText != "0"){
            displayEl.innerText += char;
        }
    }

//DECIMAL: Test if the button pressed was a decimal. User should not be able to enter a decimal if one already exists.
    else if (char === ".") {
        if (displayEl.innerText.indexOf(".") === -1) {
            displayEl.innerText += ".";
        }
    }


//PERCENTAGE: Test if the button pressed was the percent operator.
    if(char === "%") {
        displayEl.innerHTML = 4;
    }



//OPERATORS: Test if the button pressed was an operator. Add both the operand and the operator to the array. Update the expression and operator display.
    if (isOperator.test(char)) {
        if (isOperator.test(displayEl.innerHTML.charAt(displayEl.innerHTML.length - 1))) {
            backspace();
            displayEl.innerHTML += char;
        } else {
            displayEl.innerHTML += char;
        }
        
    }


//Test if the button pressed was equals. Evaluate expression.
    if(char === "=") { evaluateExpression(displayEl.innerHTML) }
}

function setOperator(char){
    if (char === "+") { operator = "+"}
    if (char === "-") { operator = "-"}
    if (char === "*") { operator = "*"}
    if (char === "÷") { operator = "÷"}
}

function clearDisplay(){
    displayEl.innerHTML = "0";
}

function cancelExpression(){
    expression.length = 0;
    clearDisplay();
}

function backspace(){
    if(displayEl.innerHTML.length > 1) {
        displayEl.innerHTML = displayEl.innerHTML.substring(0,displayEl.innerHTML.length - 1);
    } else {
        displayEl.innerHTML = 0;
    }
}

function evaluateExpression(string) {
    let result = 0;

    if(isOperator.test(displayEl.innerHTML.charAt(displayEl.innerHTML.length - 1))) {
        backspace();
    }

    for(let i = 0; i < displayEl.innerHTML.length; i++) {
        if (isOperator.test(displayEl.innerHTML.charAt(i))) {
            let operator = displayEl.innerHTML.charAt(i);
            let operand1 = 0;
            let operand2 = 0;

            if (operator === "+") {
                result = operand1 + operand2;
            }
        }
    }

    return true;
}