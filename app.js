let currentNum = ''
let previousNum = ''
let currentOperand = null

const operate = (operator) => {
    return operator
}

let operState = true
decimalState = true
numState = true




// on the display screen display contents of the 
const outputDisplay = document.querySelector("#output")
// outputDisplay.textContent = displayVal
const buttonsCalc = document.querySelectorAll("button[name='num']")
const operandCalc = document.querySelectorAll("button[name='oper']")
const pointCalc = document.querySelector("button[name='point']")


//// event listeners
buttonsCalc.forEach((btnNum) => {
    btnNum.addEventListener("click", handleNumClicked)
})

operandCalc.forEach((btnOperand) => {
    btnOperand.addEventListener("click", handleOperandClicked)
})


// event listener and handler for point
pointCalc.addEventListener("click", function handleDecimal(e) {
    
})



//// event handlers
// event handler for when numbers are clicked.
function handleNumClicked(e) {
    currentNum += e.target.value 
    outputDisplay.textContent = currentNum
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
}

function calculate(num1, operator, num2){
    switch (operator){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        default:
            return null
    }
}






















































function add([...args]) {
    let total = 0
    for (arg of args) {
        total += arg
    }
    return total
}

function subtract([...args]) {
    let subtractFrom = args[0]
    for (arg of args.slice(1)) {
        subtractFrom -= arg
    }
    return subtractFrom
}

const divide = function (...args) {
    let first = args[0]

    for (arg of args.slice(1)) {
        first /= arg
    }

    return first == "Infinity" ? "Math Error" : first
}

const multiply = function (...args) {
    let multiplyBy = args[0]
    for (arg of args.slice(1)) {
        multiplyBy *= arg
    }
    return multiplyBy
}



// console.log(operate(add(2,3,4)))
// console.log(operate(subtract(4,3,2)))
// console.log(operate(multiply(2,3,4)))
// console.log(operate(divide(2,3,4)))
