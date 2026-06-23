//1.Example

/* const add = (a, b)=>{
    return a + b
}
console.log(add(2,3)) */

//2.Example

/* const add = (a,b)=> a + b

console.log(add(2,3)) */


//3. Example
/* const getUser = ()=>({
    name: "Anas"
})
console.log(getUser()) */


//ES5
/* const user = {
    name: "Anas",

    greet: function() {

        setTimeout(function() {
            console.log(this.name);
        }, 0);

    }
};

user.greet(); */ //undefined

// ES6 Arrow Function

/* const user = {
    name: "Anas",

    greet(){

        setTimeout(()=>{
            console.log(this.name)
        },0)
    }
}

user.greet() */ //Anas



const user = {
    name: "Anas",

    greet: ()=>{
        console.log(this.name)
    }
}
user.greet()