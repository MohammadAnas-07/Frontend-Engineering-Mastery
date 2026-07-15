// Method Shorthand

const user = {
    name: "Anas",

    greet(){
        console.log("Hello")
    }
}

user.greet()

// Computed Property Names

const key = "email"

const user1 = {
    [key]: "anas@gmail.com"
}

console.log(user1)

// If we dont apply brackets

const key1 = "email"

const user2 = {
    key1: "anas@gmail.com"
}
console.log(user2)

