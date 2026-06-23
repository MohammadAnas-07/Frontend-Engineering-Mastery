// CURRIED VERSION
                                                   
/* function add(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(add(1)(2)(3)) */

//Arrow Function Version

/* const add = a=>
    b=>
        c=>
            a+b+c
console.log(add(1)(2)(3)) */



//Real World Example
//Discount Calculator

/* const discount = 
       percent=>
        amount=>
            amount - (amount * percent / 100)

const tenPercent = discount(10)

console.log(tenPercent(1000))
console.log(tenPercent(2000))
console.log(tenPercent(3000)) */


/* const multiply = a=>
    b=>
        a * b
const double = multiply(2)

console.log(double(10)) */


//Homework
function greet(name){
    return function(city){
        console.log(`${name} from ${city}`)
    }
}

greet("Anas")("Delhi")


//HomeWork

const tax = rate =>
    amount =>
        amount + (amount * rate / 100)

const gst18 = tax(18)

console.log(gst18(100))