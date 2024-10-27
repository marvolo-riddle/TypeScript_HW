"use strict";
const reverseArray = (arr) => {
    const length = arr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
};
const arr = [1, 2, 3];
const reversedArr = reverseArray(arr);
console.log(reversedArr);
console.log(reversedArr === arr);
