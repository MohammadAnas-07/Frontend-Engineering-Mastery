const user = {
    profile: {
        address : {
            city: "Delhi"
        }
    }
}

console.log(user.profile?.address?.city)

// Array Example 

const users = [
    {name: "Anas"}
];

console.log(users[0]?.name);
console.log(users[5]?.name);

//example

const user1 = {};

console.log(user1.greet?.());

