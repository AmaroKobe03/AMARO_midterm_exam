// Task list array
let tasks = [];
let taskId = 1; // Auto-incrementing ID

// Function to add a new task
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log("Task added:", task);
}

// Function to view all tasks
function viewTasks() {
    console.log("Task List:");
    tasks.forEach(task => console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`));
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found!");
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log("Task deleted:", removedTask[0]);
    } else {
        console.log("Task not found!");
    }
}

// Example usage
addTask("Matag sayu", "Ligo, Kaon.");
addTask("Ulig Sayu", "Duwa ML.");
viewTasks();
updateTask(1, "Ulig Sayu", "Duwa ML, Kaon, Buhat ug tiwas sa ELNET UG SYSARCH.");
deleteTask(2);
viewTasks();
