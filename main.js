const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");
const expressionEl = document.getElementById("expression");

let expression = [];

function btnPress(char){
    //if the button pressed is a number 1-9, add the number to the display.
    //if the button is an operator, clear the display and add the operator to the list of operands
    const isNonZero = /[1-9]/;
    const isOperator = /[-+*÷]/;
    
//Test if the button pressed was a digit 1-9
    if (isNonZero.test(char)){
        if(displayEl.innerText === "0") {
            displayEl.innerText = char;
        } else {
            displayEl.innerText += char;
        }
    }

    if (isOperator.test(char)){

    }


//Test if the button pressed was a zero.
    if (char === 0) {
        if(displayEl.innerText != "0"){
            displayEl.innerText += char;
        }
    }

//Test if the button pressed was a decimal. User should not be able to enter a decimal if one already exists.
    // if (char = ".") {
    //     if(displayEl.innerText.search('.') == false) {
    //         displayEl.innerText += char;
    //     }
    // }


//Test if the button pressed was an operator.
//Add both the operand and the operator to the array.
//Update the expression display.

//Test if the button pressed was equals. Evaluate expression
}

function clearDisplay(){
    displayEl.innerHTML = "0";
}

function cancelExpression(){
    expression.length = 0;
}

function updateExpression() {
    console.log(expression.join(" "));
    expressionEl.innerText = expression.join(" ");
}

function evaluateExpression() {
    //expression cannot be evaluated unless expression[expression.length-1] is equal to a numerical value.
    //expression must follow order of operations. MD AS
    return true;
}