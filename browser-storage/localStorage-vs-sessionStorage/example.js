const user = {
    name: "Anas"
}

localStorage.setItem("user",JSON.stringify(user))

const data = JSON.parse(localStorage.getItem("user"))
console.log(data.name)
console.log(typeof data)