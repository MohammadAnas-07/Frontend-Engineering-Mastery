const heading = document.getElementById("heading")
const items = document.getElementsByClassName("item")
const toggleMode = document.getElementById("theme")
const box = document.getElementById("box")

toggleMode.addEventListener("click",()=>{

    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black"
        ? "white"
        : "black";

    document.body.style.color =
        document.body.style.color === "white"
        ? "black"
        : "white";

})

heading.textContent = "Welcome"
box.innerHTML = "<h1>Hello</h1>"
console.log(heading.innerHTML)
console.log(items.length)
console.log(box.innerText)
console.log(box.innerHTML)