// Merge Arrays
const frontend = [
    "HTML",
    "CSS"
];

const backend = [
    "Node",
    "Express"
];

const fullstack = [
    ...frontend,
    ...backend
];

console.log(fullstack);

// Merge Objets

const user = {
    name: "Anas",
    city: "Delhi"
}

const updated = {
    ...user,
    age: 22
}

console.log(updated)

// same key 

const user1 = {
    name: "Anas",
    city: "Delhi"
}
const updated1 = {
    ...user1,
    name: "Ali"
}
console.log(updated1)

