const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");
const expressionEl = document.getElementById("expression");

const isNonZero = /[1-9]/;
const isOperator = /[-+*÷]/;

let expression = [];

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
    if (char === 0) {
        if (displayEl.innerText != "0"){
            displayEl.innerText += char;
        }
    }

//DECIMAL: Test if the button pressed was a decimal. User should not be able to enter a decimal if one already exists.
    if (char === ".") {
        if (displayEl.innerText.indexOf(".") === -1) {
            displayEl.innerText += ".";
        }
    }


//OPERATORS: Test if the button pressed was an operator. Add both the operand and the operator to the array. Update the expression and operator display.
    if (isOperator.test(char) && isNonZero.test(displayEl.innerText)) {
        updateExpression();
        expression.push(displayEl.innerText);
        expression.push(char);
        expressionEl.innerText = expression.join(" ");
        clearDisplay();
    }


//Test if the button pressed was equals. Evaluate expression.
    // if (displayEl.innerText != "0") {
    //     expression.push(displayEl.innerText);
    // }
    // if (isOperator.test(expression[expression.length - 1])) {
    //     expression.pop();
    // }
}

function clearDisplay(){
    displayEl.innerHTML = "0";
}

function cancelExpression(){
    expression.length = 0;
    expressionEl.innerText = ""
}

function updateExpression() {
    expressionEl.innerText = expression.join(" ");
}

function evaluateExpression() {
    //expression cannot be evaluated unless expression[expression.length-1] is equal to a numerical value.
    //expression must follow order of operations. MD AS
    return true;
}