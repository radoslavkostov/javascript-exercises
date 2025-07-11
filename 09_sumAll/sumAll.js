const sumAll = function(a, b) {
    if(typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0 || Math.floor(a) !== a || Math.floor(b) !== b) {
        return "ERROR";
    }
    if(b < a) {
        [a, b] = [b, a];
    }

    let res = 0;
    for(let i = a; i <= b; ++i) {
        res += i;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
