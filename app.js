let displayVal = 0

const calcObjects = {
    nums: [],
    operatorArray: [],
}

// on the display screen display contents of the 
const outputDisplay = document.querySelector("#output")
outputDisplay.textContent = displayVal
const buttonsCalc = document.querySelectorAll(".main-calculator")

buttonsCalc.forEach((item)=> {
    item.addEventListener('click', getValue)
})

function getValue(e){
    displayVal = e.target.value
    getNumsOperands(displayVal)
    outputDisplay.textContent = calcObjects.nums
    
    // getNumsOperands(e.target)
    console.log(displayVal);
}

function getNumsOperands(n){
    if (Number(n) == NaN){
        calcObjects["operatorArray"].push(n)
    }
    calcObjects["nums"].push(Number(n))
}


















const operate = (operator) =>{
    return operator
}

const add = function (...args){
    let total = 0
    for(arg of args){
        total += arg
    }
    return total
}

const subtract = function(...args){
    let subtractFrom = args[0]
    for(arg of args.slice(1)){
        subtractFrom -= arg
    }
    return subtractFrom 
}

const divide = function(...args){
    let first = args[0]

    for (arg of args.slice(1)){
        first /= arg
    }

    return first == "Infinity"? "Math Error" : first
}

const multiply = function(...args){
    let multiplyBy = args[0]
    for (arg of args.slice(1)){
        multiplyBy *= arg 
    }
    return multiplyBy
}



// console.log(operate(add(2,3,4)))
// console.log(operate(subtract(4,3,2)))
// console.log(operate(multiply(2,3,4)))
// console.log(operate(divide(2,3,4)))
