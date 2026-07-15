/* // Homework -1

const name = "Anas"
const age = 21

const user = {
    name, age
}
console.log(user)

// Homework -2

const user1 = {
    greet() {
        return "Hello";
    }
};

console.log(user1.greet());

// Homework -2 

const key = "city";

const user2 = {
    [key]: "Delhi"
};

console.log(user2);


 */


// ES6 Enhanced Object Literal syntax 

const person = { 
  name: "Anas", 
  role: "Full Stack Developer", 
};

const person1 = { 
  name: person.name, 
  role: person.role, 
  introduce() { 
    console.log(`${this.name} is a ${this.role}`); 
  } 
};

person1.introduce(); // Outputs: Anas is a Full Stack Developer
