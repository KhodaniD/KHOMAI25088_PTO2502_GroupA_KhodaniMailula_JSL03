# JSL03: Kanban Board Project - Dynamic Task Management System
---

## Project Title

**Kanban Board with Console-Based Task Manager**

---
## Project Description

This project develops a foundational Kanban board web application, designed to help users visualize and manage their workflow. It features a **responsive layout** that gracefully adapts to various screen sizes, organizing tasks into "TODO," "DOING," and "DONE" columns.

Building upon a static visual base, this version introduces a **JavaScript-driven system for task entry and management**. It dynamically prompts users to input details for **up to three new tasks** (title, description, and status) using standard JavaScript `prompt()` calls, complete with robust input validation. A key enhancement is the implementation of a **task limit alert**, which clearly notifies users when they've reached the maximum allowed number of tasks. This system significantly boosts interactivity by letting users contribute and manage data directly, while providing crucial feedback on task capacity.

---

## Technologies Used

* **HTML5**: Provides the structural backbone for the web page content and elements.
* **CSS3**: Handles the application's styling, including layout, typography, colors, and responsive design.
    * **CSS Variables**: Utilized to define a flexible color palette, simplifying theme management.
    * **Flexbox**: Employed for responsive layout of various components, ensuring flexible arrangement.
    * **CSS Grid**: Used for arranging the Kanban columns in a structured and adaptive manner.
* **JavaScript (ES6+)**: Powers the interactive task entry system, including user prompts, input validation, and console logging. This version heavily utilizes **arrays** for storing and managing task data.
    * **Array Manipulation**: Fundamental for efficiently adding, storing, and filtering task objects.
* **Google Fonts**: Specifically, 'Plus Jakarta Sans', ensures consistent and modern typography throughout the application.

---
## Features Created and Updated

### Core Features:

* **Responsive Layout**: Adapts seamlessly to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
* **Static Kanban Columns**: Displays "TODO," "DOING," and "DONE" columns with initial, predefined task cards for visual context.
* **Desktop Sidebar**: A persistent navigation sidebar on larger screens for board selection.
* **Mobile-Optimized Header**: A compact header designed for mobile devices, displaying the Kanban logo and the current board title.
* **Themed Styling**: Uses CSS variables for a clean, light theme, making visual modifications straightforward.
* **Typography Management**: Ensures consistent font styling across the application via Google Fonts integration and specific CSS rules.

### Updates & Enhancements:

* **Interactive Task Entry System with Prompts**:
    * **Dynamic Task Input**: Users are prompted to enter `title`, `description`, and `status` for **up to three new tasks**, building upon the initial task list.
    * **Task Limit Enforcement**: An `alert()` message clearly notifies the user when the maximum number of tasks (initial + new additions) has been reached, preventing further input attempts. This demonstrates adherence to project constraints.
    * **Case-Insensitive Status Input**: Automatically converts status input (e.g., "TODO", "Done") to lowercase for consistent internal handling and validation.
    * **Robust Status Validation**: Continuously re-prompts the user for status until a valid option ("todo", "doing", or "done") is entered, ensuring data integrity.
    * **Structured Task Storage**: Stores task details (unique ID, title, description, status) in well-defined JavaScript objects within an **array**, enabling easy access and manipulation.

* **Console-Based Task Management & Filtering**:

    * **Comprehensive Console Output**: Logs **both "All Tasks" and "Completed Tasks" sections** to the browser's developer console for easy review, leveraging **array** content directly.
    * **Filtered Completed Tasks**: Implements a dedicated `filterCompletedTasks()` function to display **only tasks marked as "done"** in the console under a clear label, offering quick reference for completed items from the **task array**.

* **Code Quality & Maintainability**:

    * **Descriptive Naming Conventions**: All variables, functions, and elements are named clearly and meaningfully, significantly enhancing code readability.
    * **Concise & Focused Comments**: Key logic and functionality in HTML, CSS, and JavaScript files are explained with targeted comments, focusing on design choices and crucial implementation details beneficial for understanding the codebase.

---

## Setup Instructions

To run this project locally, simply follow these steps:

1.  **Clone the repository:**

    If you haven't already, clone the project repository to your local machine using the command below:

    ```bash
    git clone: https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSL03
    ```
2.  **Navigate to the project directory:**

    Open your terminal or command prompt and change to the project's root directory:

    ```bash
    cd kanban-board-project/ # Replace with your actual project folder name
    ```

3.  **Open `index.html`:**

    Locate the `index.html` file in the root of the project directory. Double-click this file or drag it into your preferred web browser (e.g., Chrome, Firefox, Safari) to open it.

    The Kanban board will display immediately, and the task entry prompts will begin.

---

## Working Usage Examples

### Desktop View:

* Open `index.html` in a desktop browser.
* Observe the full-width sidebar on the left with the Kanban logo and board list.
* The initial Kanban board layout will appear.
* Immediately, you will be prompted **three times** to enter task details (title, description, status). The status input includes robust validation, re-prompting if invalid.
* After successfully entering details for all three new tasks, an **alert message** will automatically appear, indicating that the task limit has been reached.
* Check your browser's **developer console** (usually F12 -> Console tab) to see **two distinct sections**: "All Tasks:" and "Completed Tasks:". These lists are directly generated from the **JavaScript array** holding your tasks.
* Resize your browser window to simulate different desktop screen sizes; the columns will responsively adjust their layout.

### Mobile View:

* Open `index.html` in a mobile browser or use your desktop browser's developer tools to enable device emulation (e.g., Chrome DevTools -> Toggle device toolbar).
* The desktop sidebar will disappear, optimizing screen space.
* The header will show a compact "Kanban" logo along with the current board title.
* The Kanban columns ("TODO," "DOING," and "DONE") will stack vertically, making them easily scrollable on smaller screens.
* The **`prompt()`** windows will also adapt responsively to the mobile screen, allowing for clear task input.
* Similar to desktop, you will be prompted for three tasks, followed by the task limit alert, and **both "All Tasks" and "Completed Tasks" output will be visible in the developer console**, all powered by the **task array**.

---

## Interaction Instructions

This project provides interactive task management directly via browser prompts and console output:
* **Task Input Workflow:** Upon loading, you will be guided through entering details for **three new tasks** using sequential `prompt()` calls. Please follow the prompts for title, description, and status.
* **Status Validation:** If you enter an invalid status (anything other than "todo", "doing", or "done"), an alert will notify you, and the prompt will reappear, requiring a valid status before proceeding.
* **Task Limit Alert:** After successfully entering the three new tasks, an `alert()` will pop up, confirming that the maximum task capacity has been reached. This clearly demonstrates the system's defined limitation.
* **Viewing Console Output:** After all prompts and the limit alert, open your browser's **developer console** (typically by pressing `F12` on Windows/Linux or `Cmd + Option + I` on macOS, then navigating to the 'Console' tab) to view:
    * **"All Tasks:"** - A comprehensive list of every task currently in the system, retrieved from the **JavaScript array**.
    * **"Completed Tasks:"** - A filtered list showing only tasks with a "done" status, providing quick insights into completed work, also derived from the **task array**.

This Kanban board now serves as a robust example of interactive task input, clear validation, and crucial limit enforcement, laying an excellent foundation for more advanced features like dynamic task rendering directly on the board!