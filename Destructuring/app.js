// Object Destructuring

const user = {
    name : "Anas",
    age: 21,
    city: "Delhi"
}

const {name:username, age, city, country="India"}  = user
const user1 = {...user,name:"Ali",dep:"Full-Stack"}
console.log(user)
console.log(user1)
console.log(age)
console.log(username)

// aArray Destructuring

const colors = ["Red", "Blue", "Green"]
const [first,second] = colors
console.log(first)
console.log(second)


