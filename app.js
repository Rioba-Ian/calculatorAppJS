
const outputDisplay = document.querySelector("#output")
const INITIAL_VALUE = Number(outputDisplay)
const buttonsCalc = document.querySelectorAll(".main-calculator")

buttonsCalc.forEach((item)=> {
    item.addEventListener('click', getValue)
})

function getValue(e){
    
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
