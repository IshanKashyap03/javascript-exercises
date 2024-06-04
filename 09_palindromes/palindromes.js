const palindromes = function (string) {
    let regex = /^[A-Za-z0-9]*$/;
    let left = 0;
    let right = string.length - 1;

    while(left < right){
        while(!regex.test(string[left])){
            left++;
        }
        while(!regex.test(string[right])){
            right--;
        }
        if(string[left].toLowerCase() == string[right].toLowerCase()){
            left++;
            right--;
        }else{
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
