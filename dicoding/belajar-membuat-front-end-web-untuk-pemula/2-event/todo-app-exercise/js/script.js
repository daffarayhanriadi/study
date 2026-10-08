// Deklarasi State Global dan Variabel Konstan di paling atas (Mudah dibaca)
const todos = [];
const RENDER_EVENT = "render-todo";

// Fungsi Utilitas diletakkan di luar agar bersih dan bisa di-test mandiri
function generateId() {
  return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted) {
  return { id, task, timestamp, isCompleted };
  /*
  Expected Return:
  {
    id: "string",
    task: "string",
    timestamp: "string",
    isCompleted: "boolean"
  }
  */
}

function addTodo() {
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const generateID = generateId();
  const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget === null) {
    return;
  }

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);

  if (todoTarget === -1) {
    return;
  }

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget === null) {
    return;
  }

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  if (todoObject.isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");

    undoButton.addEventListener("click", function () {
      undoTaskFromCompleted(todoObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");

    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(todoObject.id);
    });

    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");

    checkButton.addEventListener("click", function () {
      addTaskToCompleted(todoObject.id);
    });

    container.append(checkButton);
  }

  return container;
  /*
  Expected Return:
  <div id="todo-<todo_id>" class="item shadow">
    <div class="inner">
      <h2>Tugas Android</h2>
      <p>2021-05-01</p>
    </div>
    <button class="check-button"></button>
    ...
  </div>
  */
}

// Event Listener Utama untuk Manajemen DOM
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); // agar website tidak memuat ulang secara otomatis ketika submit, sehingga data yang disimpan dalam memory akan terjaga dengan baik.
    addTodo();
  });
 
  // Listener untuk menangani perubahan tampilan (render)
  document.addEventListener(RENDER_EVENT, function () {
    // console.log(todos);
    
    // Di sinilah kita menulis logika untuk memanipulasi DOM/HTML text
    const uncompletedTodoList = document.getElementById("todos");
    uncompletedTodoList.innerHTML = "";

    const completedTodoList = document.getElementById("completed-todos");
    completedTodoList.innerHTML = "";

    for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem);
      if (!todoItem.isCompleted) {
        uncompletedTodoList.append(todoElement);
      } else {
        completedTodoList.append(todoElement);
      }
    }
  });
});
