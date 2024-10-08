const todoList = [];

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate, completed } = todoObject; // destructuring
    const completedClass = completed ? 'completed' : '';
    const html = `
      <div class="todo-grid">
        <div class="${completedClass}">${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-button" data-index="${index}">Delete</button>
      </div>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      todoList.splice(index, 1); // remove item
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const name = document.querySelector('.js-name-input').value.trim();
  const dueDate = document.querySelector('.js-due-date-input').value;

  if (name && dueDate) {
    todoList.push({ name, dueDate, completed: false });
    document.querySelector('.js-due-date-input').value = '';
    document.querySelector('.js-name-input').value = '';
    renderTodoList();
  } else {
    alert('Please enter both a name and a due date.');
  }
}
