const heading = document.getElementById("heading")
const taskInput = document.getElementById("taskInput")
const taskForm = document.getElementById("taskForm")
const taskList = document.getElementById("taskList")

// Source of Truth
const tasks = []

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function loadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))

    if(savedTasks){
        tasks.push(...savedTasks)

        savedTasks.forEach(task=>{
            renderTask(task)
        })
    }
}

function renderTask(task) {

    const li = document.createElement("li")

    li.dataset.id = task.id

    li.textContent = task.text

    if (task.completed) {
        li.classList.add("completed")
    }

    const button = document.createElement("button")
    button.textContent = "❌"
    button.classList.add("delete-btn")

    li.appendChild(button)

    taskList.appendChild(li)
}

taskForm.addEventListener("submit", function (event) {

    event.preventDefault()

    const task = taskInput.value.trim()

    if (task === "") {
        alert("Please enter a task")
        return
    }

    const taskObj = {
        id: Date.now(),
        text: task,
        completed: false
    }

    tasks.push(taskObj)

    saveTasks()

    renderTask(taskObj)

    taskInput.value = ""
})

taskList.addEventListener("click", (event) => {

   if (event.target.classList.contains("delete-btn")) {

    const li = event.target.closest("li")

    const id = Number(li.dataset.id)

    const index = tasks.findIndex(task => task.id === id)

    tasks.splice(index, 1)

    saveTasks()

    li.remove()
}

    if (event.target.tagName === "LI") {

    const li = event.target.closest("li")
    
    li.classList.toggle("completed")
}

})

loadTasks()

