/**
 * 
 * @param {string} str 
 */
const repeatString = function(str, count) {
    if(count < 0) {
        return "ERROR";
    }
    let res = "";
    while(count > 0) {
        res += str;
        --count;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
