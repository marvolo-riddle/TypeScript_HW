interface Product {
    name: string,
    price: number,
    available: boolean
}

const getStringDescription = (product: Product): string => {
    return `Product: ${product.name}, Price: ${product.price}, Available: ${product.available}`;
}

const exampleProduct : Product = {
    name: "Test",
    price: 5,
    available: true,
}

console.log(getStringDescription(exampleProduct));