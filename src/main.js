"use strict";
const createTree = (depth) => {
    if (depth === 0) {
        return {};
    }
    return {
        child: createTree(depth - 1)
    };
};
const tree = createTree(3);
console.log(tree);
