/* const user = {
    name: "Anas",

    greet(){
        console.log(this.name)
    }
}

user.greet()  */


/* const person = {
    name: "Anas",

    sayHi(){
        console.log(this.name)
    }
}

const fn = person.sayHi

fn()  */ //Undefined



/* const person = {
    name: "Anas",

    greet(){
        return()=>{
            console.log(this.name)
        }
    }
}

const fn = person.greet()
fn() */ //Anas



/* const user = {
    name: "Anas",

    greet: ()=>{
        console.log(this.name)
    }
}

user.greet() */ //undefined


//Difference between call(), apply(), and bind()?

/* const user1 = {
    name: "Anas"
}

const user2 = {
    name: "Ali"
}

function greet(){
    console.log(`Hello ${this.name}`)
}
greet() */ //Hello undefined


//1. call()

/* const user = {
    name: "Anas"
}

function greet(){
    console.log(this.name)
}
greet.call(user) */



//With Arguments

/* function greet(city, country){
    console.log(`${this.name} from ${city}, ${country}`)
}

const user = {
    name : "Anas"
}

greet.call(user,"Delhi", "India") */



//2. apply()

/* const user = {
    name: "Anas"
}

function greet(city,country){
    console.log(`${this.name} from ${city}, ${country}`)
}

greet.apply(user,["Delhi","India"]) */


//3. bind()

/* const user = {
    name: "Anas"
}

function greet(){
    setTimeout(()=>{
        console.log(this.name)
        
    },2000)
}

const newFn = greet.bind(user)

newFn() */


//Event Handlers
/* 
class User{
    constructor(){
        this.name = "Anas"
    }

    showName(){
        console.log(this.name)
    }
}
 */


//IT

/* const user = {
    name: "Anas"
}

function greet(){
    console.log(this.name)
}

greet.call(user)
greet.apply(user)

const fn = greet.bind(user)

fn() */


/* const person = {
    name: "Anas"
}

function show(){
    console.log(this.name)
}

const fn = show.bind(person)

show()  //undefined

fn() */




/* const person = {
    name: "Anas",

    greet(){
        console.log(this.name)
    }
}

setTimeout(person.greet,0)  */ //undefined


//Real fix
/* const person = {
    name: "Anas",

    greet(){
        console.log(this.name)
    }
}

setTimeout(person.greet.bind(person),0) */


