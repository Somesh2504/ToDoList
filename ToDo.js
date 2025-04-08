const task = document.querySelector(".task");
const listItems = document.querySelector(".list");

function addTask() {
  if (task.value === '') {
    alert("You must write your task to add");
  } else {
    let item = document.createElement("li");
    item.innerHTML = task.value;

    let cross = document.createElement("span");
    cross.innerHTML = '<i class="fas fa-trash-alt"></i>'; // delete icon
    item.appendChild(cross);

    listItems.appendChild(item);
  }
  task.value = '';
  saveData();
}

listItems.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (
    e.target.tagName === "SPAN" ||
    e.target.tagName === "I" // <- important: handles clicks on the icon itself
  ) {
    e.target.closest("li").remove(); // removes the entire <li>
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}

task.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function clearAll() {
  listItems.innerHTML = "";
  saveData();
}

showData();
