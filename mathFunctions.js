function add(a,b){
   return a + b;
}
 

function subtract(a,b){
    
    if(a > b){
        return a - b;
    }
    else if(b > a){
        return b - a;
    }
}


function multiply(a,b){
    return a * b;

}

function divide(a,b){
    if(b == 0 ){
        return null;
    }
    else 
    return a / b;
}


module.exports = {
    add : add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
