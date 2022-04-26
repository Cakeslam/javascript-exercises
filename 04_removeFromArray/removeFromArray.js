const removeFromArray = function(myArray, ...args) {
    return myArray.filter(input => !args.includes(input));
};

// Do not edit below this line
module.exports = removeFromArray;
