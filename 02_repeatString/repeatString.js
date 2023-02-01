const repeatString = function(userInput, repeatNum) {

    if (repeatNum < 0) {
        return "ERROR";
    }

    let res = "";
    for (let i = 0; i < repeatNum; i++) {
        res += userInput; 
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
