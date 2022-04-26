let finalSum;

const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else if (a < b) {
        finalSum = a - 1;
        for (let i = a; i <= b; i++) {
            finalSum += i;
        }
    } else {
        finalSum = b - 1;
        for (let i = b; i <= a; i++) {
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
