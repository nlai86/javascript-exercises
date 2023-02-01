const removeFromArray = function(userInput, ...removalItems) {
    removalItemsList = [];
    for (let i of removalItems) {
        removalItemsList[i] = i;
    }

    for (let i = 0; i < removalItems.length; i++) {
        for (let x = 0; x < userInput.length; x++) {
            if (userInput[x] == removalItems[i]) {
                if (typeof(userInput[x]) == typeof(removalItems[i])) {
                    userInput.splice(x, 1);
                }
            }
        }
        
    }
    console.log(userInput)
    return userInput;

};

// Do not edit below this line
module.exports = removeFromArray;
