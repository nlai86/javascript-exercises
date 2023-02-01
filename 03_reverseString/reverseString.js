const reverseString = function(userInput) {
    let res = [];
    for (let i = 0; i < userInput.length; i++) {
        res[i] = userInput.charAt(userInput.length - 1 - i);
    }
    res = res.join("");
    return res;
};

// Do not edit below this line
module.exports = reverseString;
