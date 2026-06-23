//JavaScript Me 3 Types Ke Scope

//1.Global Scope

/* let username = "Anas"

function show(){
    console.log(username)
}
show() */


//2.Function Scope

/* function test(){
    let age = 21
    console.log(age)
}
test()

console.log(age)
 */

//3.Block Scope

/* {
    let city = "Delhi"
    console.log(city)
}
console.log(city) */

//Interview Trap

/* const user = {
    name: "Anas"
}
user.name = "Rahul"
console.log(user) */

/* const user = {
    name: "Anas"
}

user.name = "Ali"
console.log(user.name) */

let a = 10
{
    let a =20
    {
        const a = 30
        console.log(a)
    }
    console.log(a)
}
console.log(a)