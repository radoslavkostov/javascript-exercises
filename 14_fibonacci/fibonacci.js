const fibonacci = function(fibNum) {
    if(fibNum == 0) {
        return 0;
    }
    if(fibNum < 0) {
        return "OOPS";
    }

    let prev = 1, curr = 1;
    for(let i = 3; i <= fibNum; ++i) {
        [prev, curr] = [curr, prev + curr];
    }
    
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
