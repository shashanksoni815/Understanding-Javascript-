// Load tasks on page load
window.onload = () => displayTasks();

// Create
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    id: Date.now(),
    text: taskText
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

// Read
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.text}
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Update
function editTask(id) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskToEdit = tasks.find(task => task.id === id);

  const newText = prompt("Edit task:", taskToEdit.text);
  if (newText !== null && newText.trim() !== "") {
    taskToEdit.text = newText.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

// Delete
function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
