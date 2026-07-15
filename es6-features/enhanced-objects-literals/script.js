// Interview Question
 
const name = "Ali";

const user = {
    name: "Anas",

    greet() {
        console.log(name);
        console.log(this.name);
    }
};

user.greet();