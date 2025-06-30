
// This script implements a simple task management system.
// Tasks are stored as objects in an array, managed via user prompts and console logging.

// Initial task array, demonstrating a predefined set of tasks.
const initialTasks = [
{
id: 1,
title: "Launch Epic Career", 
description: "Create a killer Resume",
status: "todo",
},
{
id: 2,
title: "Master JavaScript",
description: "Get comfortable with the fundamentals",
status: "doing",
},
{
id: 3,
title: "Contribute to Open Source Projects",
description: "Gain practical experience and collaborate with others in the software development community",
status: "done",
},
];

// Initialize the main tasks array 
// This allows modification of 'tasks' without altering 'initialTasks'.
let tasks = [...initialTasks];

// Defines the maximum number of tasks allowed.
// Set to 6 to accommodate 3 initial tasks + 3 new tasks, as per project brief.
const taskLimit = 6;

/**
* Handles user interaction to add a new task.
* Prompts for title, description, and status, and validates status input.
* Implements the task limit check and alerts the user if exceeded. 
*/

function addTask(){
  // Check if the task array has reached its predefined limit.
  // This fulfills the requirement to alert the user when the limit is reached.
  if (tasks.length >= taskLimit) {
    alert("There are enough tasks on your board, please check them in the console.");
    return; // Exit the function if no more tasks can be added.
  }

  // Prompts for task details, handling 'Cancel' to prevent incomplete task creation.
  const newTaskTitle = prompt("Enter task title:");
  if (newTaskTitle === null) return;

  const newTaskDescription = prompt("Enter task description:");
  if (newTaskDescription === null) return;

  let newTaskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
  if (newTaskStatus === null) return;

  // Input validation loop to ensure the task status is one of the allowed values.
  while (newTaskStatus !== "todo" && newTaskStatus !== "doing" && newTaskStatus !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    newTaskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
    if (newTaskStatus === null) return; // Allow user to cancel re-prompt
  }

  // Generates a unique, incremental ID for the new task based on the last task's ID.
  const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
  const newTask = {
    id: lastTaskId + 1,
    title: newTaskTitle,
    description: newTaskDescription,
    status: newTaskStatus,
  };

  tasks.push(newTask); // Adds the new task object to the array.
}

/**
* Filters the main tasks array to return only tasks marked as "done".
* This function is key for displaying completed tasks as per requirements.
* @returns (Array<Object>} An array of task objects with status "done".
*/

function filterCompletedTasks() {
  return tasks.filter(task => task.status === "done");
}

/**
* Logs all tasks and then specifically completed tasks to the console.
* This fulfills the project's emphasis on console logging for task review.
*/
function logTasksToConsole() {
console.log("All Tasks:", tasks);
const completedTasks = filterCompletedTasks(); // Utilize the filter function.
console.log("Completed Tasks:", completedTasks);
}

// Executes when the web page has fully loaded.
// window.onload = function() {
//   logTasksToConsole(); // Logs the initial tasks to the console.
// };

// Automatically prompts the user to add tasks until the 'taskLimit' is met.
// This ensures the initial task count aligns with the project requirements (3 new tasks).
if (tasks.length < taskLimit) {
  const remainingTasks = taskLimit - tasks.length;
  for (let i = 0; i < remainingTasks; i++) {
    addTask();
  }
// Attempts to add one more task immediately after the limit is reached.
// This specifically triggers the "task limit reached" alert for demonstration.
addTask();
// Logs all tasks (including newly added ones) to the console for review.
logTasksToConsole();
};