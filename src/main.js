"use strict";
const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }
    const copy = {};
    for (const key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
};
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);
console.log(copy);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
