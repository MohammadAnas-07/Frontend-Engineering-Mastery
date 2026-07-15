// Example - 1

const name = undefined

console.log(name ?? "Guest") // Guest

// Example - 2

const person = "";

console.log(person ?? "Guest") // Empty String

// Example - 3

const score = 0;
console.log(score ?? 100) // 0

// Example - 4

const isAdmin = false

console.log(isAdmin ?? true) // false

// Example - 5

const result = null

console.log(result ?? true) // true

// Combine with Optional Chaining

const users = {}

console.log(users.profile?.city ?? "Delhi")


const role = ""
console.log(role ?? "Full-Stack")


console.log(Boolean({})); //true
console.log(Boolean([])); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false