/**
 * 
 * @param {string} str 
 */
const palindromes = function (str) {
    let processedStr = "";
    for(let i=0;i<str.length;++i) {
        if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
            processedStr += str[i];
        }
        else if(str[i] >= 'A' && str[i] <= 'Z') {
            processedStr += str[i].toLowerCase();
        }
    }

    let left = 0, right = processedStr.length - 1;
    while(left < right) {
        if(processedStr[left++] !== processedStr[right--]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
