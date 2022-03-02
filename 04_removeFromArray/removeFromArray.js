const removeFromArray = function(myArray, num) {
    for (const numb of myArray) {
        if (myArray[numb] == num) {
            myArray.splice(numb, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
