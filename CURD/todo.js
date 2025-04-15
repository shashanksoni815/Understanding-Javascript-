window.onload = () => displayTasks() ;
//Add tasks
function addTask()  {
    let inp = document.getElementById("input");
    let taskText = inp.value.trim();
    if(!taskText) return;
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;
    
    const newTask = {
        id: Date.now(),
        text: taskText
    };
    
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    inp.value = ""
    displayTasks()
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;
    let ul = document.getElementById("ul")
    ul.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li")
        li.innerHTML = `
            <span id="text-${task.id}" > ${task.text} </span>
            <input type="text" id="editInp-${task.id}" value="${task.text}" style="display:none;" >
            <button onclick="saveTask(${task.id})" id="save-${task.id}" style="display:none;"  >Save</button>
            <button onclick="editTask(${task.id})" id="edit-${task.id}" >Edit</button>
            <button onclick="delTask(${task.id})" >Delete</button>
        `
        ul.appendChild(li)
    });
}

function editTask(id) {
    document.getElementById(`text-${id}`).style.display = "none";
    document.getElementById(`edit-${id}`).style.display = "none";
    document.getElementById(`editInp-${id}`).style.display = "inline-block";
    document.getElementById(`save-${id}`).style.display = "inline-block";
}

function saveTask(id) {

    let editVal = document.getElementById(`editInp-${id}`).value.trim();
    if(editVal == "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;
    let taskEdit = tasks.findIndex(task => task.id === id);
    if (taskEdit !== -1) {
        tasks[taskEdit].text = editVal;
        // tasks.text = editVal;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // document.getElementById(`text-${id}`).style.display = "inline-block";
        // document.getElementById(`editInp-${id}`).style.display = "none";
        // document.getElementById(`save${id}`).style.display = "none";
        displayTasks()
    }
}

function delTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }


























// let input = document.getElementById("input")
// let add = document.getElementById("add")

// add.addEventListener('click', function()  {
//     if (input.value === "") {
//         return alert("Enter Your Task")
//     }
//     let task = input.value.trim()
//     console.log(task)

//     let ul = document.getElementById("ul")
//     let li = document.createElement("li")
//     let span = document.createElement("span")
//     let edit = document.createElement("button")
//     let del = document.createElement("button")

//     span.textContent = task;
//     edit.textContent = "Edit"
//     del.textContent = "Delete"

//     ul.appendChild(li)
//     li.appendChild(span)
//     li.appendChild(edit)
//     li.appendChild(del)

//     del.addEventListener('click', function() {
//         console.log("delete")
//         let ele = del.parentElement
//         console.log(ele)
//         ele.remove()
//     })

//     edit.addEventListener('click', function() {
//         console.log("Edit")
//         let ele = edit.previousSibling;
//         let editText = prompt("Edit your task", ele.textContent)
//         if (editText !== ""  ) {
//             ele.textContent = editText.trim()
//         }
//     })
//     input.value = ""
// })