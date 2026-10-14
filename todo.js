const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// ¥” Local Storage º”‘ÿ
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    // µ„ª˜…æ≥˝
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;
  tasks.push(task);
  taskInput.value = "";
  saveAndRender();
}

function removeTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// ≥ı º‰÷»æ
renderTasks();