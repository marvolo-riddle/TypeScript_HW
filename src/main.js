"use strict";
const getAverage = (array) => {
    if (array.length === 0)
        return 0;
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
};
const array = [1, 2, 3, 4, 5];
const array2 = [5, 5, 2];
console.log(getAverage(array));
console.log(getAverage(array2));
