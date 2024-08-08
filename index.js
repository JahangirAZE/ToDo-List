const todoList = [];
function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject; //destructuring
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-button').
    forEach((button, index) => {
      button.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
  });
}
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});
function addTodo() {
  const name = document.querySelector('.js-name-input').value;
  const dueDate = document.querySelector('.js-due-date-input').value;
  if (name && dueDate) {
    todoList.push({ name, dueDate });
    document.querySelector('.js-due-date-input').value = '';
    document.querySelector('.js-name-input').value = '';
    renderTodoList();
  } else {
    alert('Please enter both a name and a due date.');
  }
}
