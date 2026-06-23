//Primitive Types = Value Copy

/* let a = 10
let b = a

b = 20

console.log(a)
console.log(b) */

//Non-Primitive Types = Reference Copy

/* let user1 = {
    name:"Anas"
}
let user2 = user1

user2.name = "Ali"

console.log(user1.name)
console.log(user2.name) */

/* let arr1 = [1,2,3]

let arr2 = arr1

arr2.push(4)

console.log(arr2) */



//Most Asked Question

/* let a = [1,2,3]

let b = a

b = [4,5,6]

console.log(a)
console.log(b) */

/* Why?
Yaha object modify nahi hua.
Reference hi replace ho gaya. */


/* const obj1 = {
    name: "Anas"
}

const obj2 = {
    name: "Anas"
}

console.log(obj1 === obj2)  */   //False. Why? Memory me dono alag objects hain.
//obj1 -> Address A
//obj2 -> Address B


/* const user = {
    name: "Anas"
}

user.name = "Ali"
console.log(user.name) */





