/////////// 1 task

interface Address {
    street: string;
    city: string;
    zipCode: string;
}


interface User {
    name: string;
    age: number;
}


interface UserWithAddress extends User, Address {
    email: string;
}


const userWithAddress: UserWithAddress = {
    name: "Inna",
    age: 24,
    street: "1 Legacy St",
    city: "Asgard",
    zipCode: "12345",
    email: "inna@example.com"
};

console.log(userWithAddress);










////////// 2 task

interface Product {
    name: string;
    price: number;
    category: {
        categoryName: string;
        categoryId: number;
    };
}


interface Order {
    orderId: number;
    userId: number;
    products: Product[];
}


const orders: Order[] = [
    {
        orderId: 1,
        userId: 101,
        products: [
            { name: "Book", price: 9.99, category: { categoryName: "Books", categoryId: 1 } },
            { name: "Pen", price: 1.99, category: { categoryName: "Stationery", categoryId: 2 } }
        ]
    },
    {
        orderId: 2,
        userId: 102,
        products: [
            { name: "Laptop", price: 999.99, category: { categoryName: "Electronics", categoryId: 3 } }
        ]
    }
];

console.log(orders);










////////// 3 task


interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}


function getFullName(person: Person): string {

    return person.middleName
        ? `${person.firstName} ${person.middleName} ${person.lastName}`
        : `${person.firstName} ${person.lastName}`;
}


const person1: Person = { firstName: "Inna", lastName: "Ovcharenko" };
const person2: Person = { firstName: "Jane", middleName: "A.", lastName: "Smith" };

console.log(getFullName(person1));
console.log(getFullName(person2));







///////// 4 task


interface Settings {
    theme: "light" | "dark";
    notifications: boolean;
    autoSave: {
        enabled: boolean;
        interval: number;
    };
}


function applySettings(settings: Settings): void {

    if (settings.theme === "dark") {
        console.log("Dark theme activated");
    } else {
        console.log("Light theme activated");
    }


    if (settings.notifications) {
        console.log("Notifications are enabled");
    } else {
        console.log("Notifications are disabled");
    }


    if (settings.autoSave.enabled) {
        console.log(`Autosave enabled, interval: ${settings.autoSave.interval} minutes`);
    } else {
        console.log("Autosave is disabled");
    }
}


const userSettings: Settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 10
    }
};

applySettings(userSettings);


