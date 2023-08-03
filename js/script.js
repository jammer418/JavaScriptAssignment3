// Create a list with the items inputted by the user
function createTodoItem(todoText) {
    const todoList = document.getElementById("todoList");
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoItem.appendChild(checkbox);
  
    const text = document.createElement("span");
    text.textContent = todoText;
    todoItem.appendChild(text);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    todoItem.appendChild(deleteBtn);
  
    // When button clicked item deleted
    deleteBtn.addEventListener("click", function() {
      todoItem.classList.add("deleted");
      playErrorSound();
      setTimeout(function() {
        todoList.removeChild(todoItem);

      }, 1000);
    });
  
    // Event handler for checked items
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        todoItem.classList.add("completed");
        todoItem.classList.add("checked");
        playDingSound(); 
        todoList.appendChild(todoItem); 
        setTimeout(() => {
            todoItem.classList.remove('checked');
          }, 2000);

      } else {
        todoItem.classList.remove("completed");
        todoList.insertBefore(todoItem, todoList.firstChild); 
      }
    });
  
    todoList.appendChild(todoItem);
  }
  
  // Adds inputted item
  function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      createTodoItem(todoText);
      todoInput.value = "";
    }
  } 
  // Event handler for adding item
  document.getElementById("addBtn").addEventListener("click", addTodo);
  
  
  // Function to play DING Sound Effects.mp3 
  function playDingSound() {
    const audio = new Audio('https://jammer418.github.io/JavaScriptAssignment3/ding/DING Sound Effects.mp3');
    audio.play();
  }

  // Function to play Windows Error (Sound effect).mp3 
  function playErrorSound() {
    const errAudio = new Audio('/ding/Windows Error (Sound effect).mp3');
    errAudio.play();
  }


