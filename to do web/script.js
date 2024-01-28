const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = document.createElement('li');
        task.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        </div>
        `;

        const completeBtn = task.querySelector('.completeBtn');
        completeBtn.addEventListener('click', completeTask);

        const deleteBtn = task.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', deleteTask);

        pendingTasksList.appendChild(task);

        taskInput.value = '';
    }
}


function completeTask(event) {
    const task = event.target.closest('li');
    const taskText = task.querySelector('span').innerText;

    const completedTask = document.createElement('li');
    completedTask.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
        <button class="deleteBtn">Delete</button>
        </div>
    `;

    const deleteBtn = completedTask.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', deleteTask);

    completedTasksList.appendChild(completedTask);
    task.remove();
}


function deleteTask(event) {
    const task = event.target.closest('li');
    task.remove();
}


addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});