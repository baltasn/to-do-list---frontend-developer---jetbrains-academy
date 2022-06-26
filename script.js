"use strict";


const newTaskInputField = document.getElementById("input-task");
const btnAddTask = document.getElementById("add-task-button");
const tasksEl = document.querySelector(".tasks");

const taskList = [
  {task: "Email David", done: false},
  {task: "Create ideal user persona guide", done: false},
  {task: "Set up A/B test", done: false}
];

let tasksListEl;


function addTaskToList() {
  if(newTaskInputField.value !== ""){
    taskList.push({task: newTaskInputField.value, done: false});
    newTaskInputField.value = "";
    tasksListEl = document.createElement("ul");
    tasksListEl.setAttribute("id", "task-list");
    tasksEl.replaceChildren(tasksListEl);
    taskList.forEach(createTaskElement);

  }
}

function initialize() {
  tasksListEl = document.createElement("ul");
  tasksListEl.setAttribute("id", "task-list");
  tasksEl.replaceChildren(tasksListEl);
  taskList.forEach(createTaskElement);
}

function createTaskElement(task,taskIndex) {

  const taskCheckBox = document.createElement("input");
  taskCheckBox.setAttribute("class" ,"checkbox");
  taskCheckBox.setAttribute("type" ,"checkbox");
  taskCheckBox.setAttribute("id", `task-checkbox-${taskIndex}`);
  taskCheckBox.checked = task.checked;

  const taskText = document.createElement("span");
  taskText.setAttribute("class", "task");
  taskText.setAttribute("id", `task-${taskIndex}`);
  taskText.innerHTML = task.task;

  const taskDivEl = document.createElement("div");
  taskDivEl.setAttribute("class", "task-div");
  taskDivEl.appendChild(taskCheckBox);
  taskDivEl.appendChild(taskText);


  const btnDeleteTask = document.createElement("button");
  btnDeleteTask.setAttribute("class", "delete-btn");
  btnDeleteTask.setAttribute("id", `btn--delete-${taskIndex}`);
  btnDeleteTask.addEventListener("click",function (){
    taskList.splice(taskIndex, 1);
    tasksListEl = document.createElement("ul");
    tasksListEl.setAttribute("id", "task-list");
    tasksEl.replaceChildren(tasksListEl)
    taskList.forEach(createTaskElement)
  });
  btnDeleteTask.innerHTML = "delete";

  const taskBtnEl = document.createElement("div");
  taskBtnEl.setAttribute("class", "button-div");
  taskBtnEl.appendChild(btnDeleteTask);


  const taskItem = document.createElement("li");
  taskItem.setAttribute("class", "task-item");
  tasksListEl.appendChild(taskItem);
  taskItem.appendChild(taskDivEl);
  taskItem.appendChild(taskBtnEl);
}


initialize();
btnAddTask.addEventListener("click", addTaskToList);

/*
newTaskInputField.value = "Email David";
btnAddTask.click();

newTaskInputField.value = "Create ideal user persona guide";
btnAddTask.click();

newTaskInputField.value = "Set up A/B test";
btnAddTask.click();
*/

