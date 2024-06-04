const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    let firstElement = 1;
    let secondElement = 1;
    let thirdElement = firstElement + secondElement;
    let result = 0;

    if(num == 1){
        return firstElement;
    }

    if(num == 2){
        return secondElement;
    }

    if(num == 3){
        return thirdElement;
    }

    for(let i = 4; i<=num; i++){
        result = thirdElement + secondElement;
        secondElement = thirdElement;
        thirdElement = result;
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
