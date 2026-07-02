//express example
// Generate JWT
const jwt = require("jsonwebtoken")

const token = jwt.sign(
    {
        id: 1,
        name: "Anas"
    },
    "mySecretKey",
    {
        expiresIn: "1h"
    }
)

console.log(token)

//Verify JWT
const decoded = jwt.verify(
    token,
    "mySecretKey"
);

console.log(decoded);