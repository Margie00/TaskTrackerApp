
// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.


// script.js
// Section 2: App State Variables
let tasks = [];

const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")



function handleSubmission(event) {
    event.preventDefault(); // stops form from reloading page
    // Get form input values
        const taskName = document.getElementById('taskName').value
        const taskDescription = document.getElementById('taskDescription').value
        const taskDeadline = document.getElementById('taskDeadline').value
    
        // Validate input fields
        if(taskName == "" || taskDeadline == "") {
             alert('Task name and deadline are required!')
         }

        //  Update the tasks array
         tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline })
    
    render();

}


// Function to render tasks in the table
function render() {

    // Using array methods to create new table row of data for each item in arr
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}


// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call init to set up the initial state of app
init();


function completeTask(){

}

function deleteTask(){

}

function taskOrder(){
    
}



