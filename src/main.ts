
type Tree = {
    child?: Tree;
};

const createTree = (depth: number): Tree =>{
    if (depth === 0) {
        return {};
    }

    return {
        child: createTree(depth - 1)
    };
}


const tree = createTree(3);
console.log(tree);
