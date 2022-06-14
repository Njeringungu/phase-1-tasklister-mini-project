document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskItem = document.getElementById("create-task-form");
  const newTaskItem = document.getElementById("new-task-description");
  const newPriorityTask = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");
  taskItem.addEventListener("submit", createNewTask);
});
const createNewTask = event => {
  event.preventDefault();
  const newTaskItem = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskItem.value;
  appendNewTask(newTask);
  event.target.reset();
};
const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);

};
