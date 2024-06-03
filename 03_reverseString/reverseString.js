const reverseString = function(string) {
    let lastIndex = string.length - 1;
    let result = "";

    for(let i = lastIndex; i>=0; i--){
        result+=string[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
