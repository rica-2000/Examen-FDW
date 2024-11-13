document.getElementById('addTaskButton').addEventListener('click', addTask);
let taskToDelete = null;

function addTask() 
{
    const taskInput = document.getElementById('taskInput');
    const priority = document.getElementById('priority').value;
    const tasksContainer = document.getElementById('tasksContainer');

    if (taskInput.value.trim() !== "") 
    {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${priority}`;
        taskDiv.innerHTML = `
            ${taskInput.value} - Prioridad: ${priority.charAt(0).toUpperCase() + priority.slice(1)}
            <button onclick="confirmDelete(this, '${priority}')">Eliminar</button>
        `;
        tasksContainer.appendChild(taskDiv);
        taskInput.value = '';
    } 
    else 
    {
        alert("La tarea no puede estar vacía.");
    }
}

function confirmDelete(button, priority) 
{
    if (priority === 'alta') 
    {
        taskToDelete = button.parentElement;
        document.getElementById('confirmDialog').style.display = 'block';
    } else
    {
        button.parentElement.remove();
    }
}

document.getElementById('confirmDeleteButton').addEventListener('click', function()
{
    if (taskToDelete)
    {
        taskToDelete.remove();
        taskToDelete = null;
    }
    document.getElementById('confirmDialog').style.display = 'none';
});

document.getElementById('cancelDeleteButton').addEventListener('click', function()
{
    taskToDelete = null;
    document.getElementById('confirmDialog').style.display = 'none';
});
