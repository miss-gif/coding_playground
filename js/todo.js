const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = newTodo;
  const button = document.createElement("button");
  button.innerText = "×";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteToDo(event) {
  console.dir(event.target.parentElement);
  console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos !== null) {
  const paintToDos = JSON.parse(savedToDos);
  paintToDos.forEach((item) => console.log("item리턴함", item));
}
