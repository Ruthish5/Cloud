function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
  
  const li = document.createElement("li");
  li.textContent = taskText;
  
  li.onclick = () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
  };
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
