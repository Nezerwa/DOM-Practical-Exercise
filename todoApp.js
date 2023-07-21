let addTodo = document.getElementById("addtodo");
let todoContainer = document.getElementById("todo-container");
let input = document.getElementById("inputField");
let ul = document.getElementById("list");

//Adding The Item

addTodo.addEventListener("click", function () {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.textContent = "Remove";
  li.textContent = input.value;
  ul.appendChild(li);
  li.appendChild(btn);
  //Adding the checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });
  li.appendChild(checkbox);
  input.value = "";
});

// Removing the Item

const deleteTodo = (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove();
  }
};

ul.addEventListener("click", deleteTodo);
