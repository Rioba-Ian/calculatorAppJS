let currentNum = ''
let previousNum = ''
let currentOperand = null

const operate = (operator) => {
    return operator
}

let decimalHandled = false 

// on the display screen display contents of the 
const outputDisplay = document.querySelector("#output")
// outputDisplay.textContent = displayVal
const buttonsCalc = document.querySelectorAll("button[name='num']")
const operandCalc = document.querySelectorAll("button[name='oper']")
const pointCalc = document.querySelector("button[name='point']")
const equalSign = document.querySelector("#equals")
const resetCalc = document.querySelector("#reset")

//// event listeners
buttonsCalc.forEach((btnNum) => {
    btnNum.addEventListener("click", handleNumClicked)
})

operandCalc.forEach((btnOperand) => {
    btnOperand.addEventListener("click", handleOperandClicked)
}, {once:true})


// event listener and handler for point
pointCalc.addEventListener("click", function handleDecimal(e) {
    if (!decimalHandled && currentNum && !isNaN(currentNum)){
        currentNum += "."
        outputDisplay.textContent = currentNum
        decimalHandled = true
    }
})

equalSign.addEventListener("click", function handleEquals(){
    if (previousNum && currentNum){
        const result =  calculate(parseFloat(previousNum),currentOperand, parseFloat(currentNum))
        outputDisplay.textContent = result
    }
})

resetCalc.addEventListener("click", function handleReset(){
    if (previousNum || currentNum){
        previousNum, currentNum = 0
        outputDisplay.textContent = 0
    }
})

//// event handlers
// event handler for when numbers are clicked.
function handleNumClicked(e) {
    currentNum += e.target.value 
    outputDisplay.textContent = currentNum

    if (decimalHandled && currentNum && !isNaN(currentNum)){
        decimalHandled = false
    }
}


// event handler for when operand is clicked
function handleOperandClicked(e) {
    if(previousNum !== ""){
        const result = calculate(parseFloat(previousNum), currentOperand, parseFloat(currentNum))
        outputDisplay.textContent = result 
        previousNum = result
    }else{
        previousNum = currentNum
    }
    currentNum = ""
    currentOperand = e.target.value
    console.log(currentOperand);
    console.log(previousNum, currentNum);
}

function calculate(num1, operator, num2){
    switch (operator){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2 
        case "/":
            return num2 == 0? "Math Error" : num1 / num2
        default:
            return null
    }
}




function add(a,b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}
