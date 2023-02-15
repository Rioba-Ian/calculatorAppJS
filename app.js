let displayVal

let operandSelected = false;

const operate = (operator) =>{
    return operator
}

const calcObjects = {
    nums: [],
    operator: [],
}
// on the display screen display contents of the 
const outputDisplay = document.querySelector("#output")
outputDisplay.textContent = displayVal

const buttonsCalc = document.querySelectorAll("button[name='num']")
const operandCalc = document.querySelectorAll("button[name='oper']")
const pointCalc = document.querySelector("button[name='point']")


// event listeners
buttonsCalc.forEach((item)=> {
    item.addEventListener('click', getBtnValue)
})

operandCalc.forEach((item)=> {
    item.addEventListener('click', getOperValue)
})

pointCalc.addEventListener("click", ()=> {
    if (!operandSelected){
        handlePoint 
    }
}, {once: true})

if(operandSelected){
    pointCalc.removeEventListener("click", handlePoint)
}


// handlers for event listeners
function getBtnValue(e){
    
    calcObjects["nums"].push(e.target.value)
    displayVal = calcObjects.nums[0]

    outputDisplay.textContent += calcObjects["nums"].at(-1)
}

function getOperValue(e){
    calcObjects["operator"].push(e.target.id)
    calcObjects["nums"].push(",")

    operandSelected = false 

    outputDisplay.textContent += e.target.value
}

function handlePoint(){
    outputDisplay.textContent += "."
    calcObjects["nums"].splice(-1, 1, calcObjects.nums.slice(-1)+".")  
}



// let test_arr = []
// let test1 = ['2','3',',','4', ","]
// test_arr = test1.join("")
//                 .split(",")
//                 .map(item => Number(item))
// result = add(test_arr)
// console.log(add(test_arr))

// const posOperators = test1.reduce((acc, val, iter)=> 
//                     (val === "," && acc.push(iter), acc),    
//                     [])





// function createResult(obj){
//     if (obj.nums.length == 4){
//         obj["pairNums"] = obj["nums"].join("")
//                             .split(",")
//                             .map(item => Number(item))
//     }

    
//     return obj
// }

// createResult(calcObjects)
























function add([...args]){
    let total = 0
    for(arg of args){
        total += arg
    }
    return total
}

function subtract([...args]){
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
