console.log("Here....")

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

const operate = (operator) =>{
    return operator
}

console.log(operate(add(2,3,4)))
console.log(operate(subtract(4,3,2)))
console.log(operate(multiply(2,3,4)))
console.log(operate(divide(2,3,4)))
