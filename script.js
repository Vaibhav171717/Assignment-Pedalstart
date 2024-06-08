document.addEventListener('DOMContentLoaded', function() {
  fetchTasks();

  document.getElementById('add-task-button').addEventListener('click', function() {
    // Show add task form
  });
});

function fetchTasks() {
  fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(data => {
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = '';
      data.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p>Due: ${task.dueDate}</p>
        `;
        taskList.appendChild(taskItem);
      });
    })
    .catch(error => console.error('Error fetching tasks:', error));
}
