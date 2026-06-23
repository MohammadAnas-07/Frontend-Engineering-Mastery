//1.Example

/* function outer(){
    let name = "Anas"

    function inner(){
        console.log(name)
    }

    return inner
}

const fn = outer()

fn() */

//Ek function apne outer scope ke variables ko yaad rakhta hai, even after outer function execute ho chuka ho.


//2.Example

/* function createCounter(){

    let count = 0

    return function(){
        count++
        console.log(count)
    }

}

const counter = createCounter()

counter()
counter()
counter() */

//3.Real World Example — Private Variables

/* function bankAccount(){

    let balance = 1000

    return{
        deposit(amount){
            balance += amount
        },

        getBalance(){
            return balance
        }
    }
}

const account = bankAccount()

account.deposit(500)

console.log(account.getBalance()) */




/* function parent(){

    let name = "Anas"

    return function(){

        console.log(name)

        name = "Ali"
    }
}

const child = parent()

child()
child()
 */


//IT 1
/* 
for(let i = 1; i <= 3; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
} */
//let har iteration ke liye naya block scope create karta hai.

//Iteration 1 -> i = 1
//Iteration 2 -> i = 2
//Iteration 3 -> i = 3
//Har callback ke paas apna closure hai.


//IT 2

function outer(){

    let count = 0

    return {
        increment(){
            count++
        },

        getCount(){
            return count
        }
    }
}

const counter1 = outer()

counter1.increment()
counter1.increment()

console.log(counter1.getCount())

//IT 3

function createUser(name){

    return function(){
        console.log(name)
    }
}

const user1 = createUser("Anas")
const user2 = createUser("Ali")

user1()
user2()