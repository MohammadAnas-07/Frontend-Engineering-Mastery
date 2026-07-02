const user = {
    name: "Anas",
    city: "Delhi",
    age: 21
}

const str = JSON.stringify(user)

console.log(str)
console.log(typeof str)

const obj = JSON.parse(str)

console.log(obj)
console.log(typeof obj)

console.log(obj.name)
console.log(obj.city)
console.log(obj.age)