const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    let res = 0;

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            res += i; 
        }
    }   else {
            for (let i = num2; i <= num1; i++) {
                res += i; 
            }
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
