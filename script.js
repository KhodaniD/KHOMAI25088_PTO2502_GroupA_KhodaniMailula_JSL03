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