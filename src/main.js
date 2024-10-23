"use strict";
const getStringDescription = (product) => {
    return `Product: ${product.name}, Price: ${product.price}, Available: ${product.available}`;
};
const exampleProduct = {
    name: "Test",
    price: 5,
    available: true,
};
console.log(getStringDescription(exampleProduct));
