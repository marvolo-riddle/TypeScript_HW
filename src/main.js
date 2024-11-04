/////////// 1 task
const userWithAddress = {
    name: "Inna",
    age: 24,
    street: "1 Legacy St",
    city: "Asgard",
    zipCode: "12345",
    email: "inna@example.com"
};
console.log(userWithAddress);
const orders = [
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
function getFullName(person) {
    return person.middleName
        ? `${person.firstName} ${person.middleName} ${person.lastName}`
        : `${person.firstName} ${person.lastName}`;
}
const person1 = { firstName: "Inna", lastName: "Ovcharenko" };
const person2 = { firstName: "Jane", middleName: "A.", lastName: "Smith" };
console.log(getFullName(person1));
console.log(getFullName(person2));
function applySettings(settings) {
    if (settings.theme === "dark") {
        console.log("Dark theme activated");
    }
    else {
        console.log("Light theme activated");
    }
    if (settings.notifications) {
        console.log("Notifications are enabled");
    }
    else {
        console.log("Notifications are disabled");
    }
    if (settings.autoSave.enabled) {
        console.log(`Autosave enabled, interval: ${settings.autoSave.interval} minutes`);
    }
    else {
        console.log("Autosave is disabled");
    }
}
const userSettings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 10
    }
};
applySettings(userSettings);
export {};
