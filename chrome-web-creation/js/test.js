const todos = [{ text: "lalala" }, { text: "lololo" }];

function sexyFilter(todo) {
  return todo.text !== "lololo";
}

todos.filter(sexyFilter); // {text: 'lalala'}

const arr = [1, 2, 3, 4];
arr.filter((item) => item > 2); // [3, 4]
const newArr = arr.filter((item) => item > 2);
arr; // [1, 2, 3, 4]
newArr; // [3, 4]
