# Assignment-Pedalstart
In this assignment, You will be tasked with building a simple Task Management Application that allows users to create, read, update, and delete tasks. This project will assess your proficiency in both front-end and back-end development skills. You are free to choose any technology stack you are comfortable with.
Assignment Requirements:
Front-end: 1. Create a user interface for the Task Management Application with the following features: - A landing page displaying a list of tasks.- Ability for users to add new tasks with a title, description, and due date. - Ability for users to view detailed information of each task. - Option to edit existing tasks. - Option to delete tasks. - Responsive design to ensure usability on both desktop and mobile
devices.
2. Use appropriate HTML, CSS, and JavaScript frameworks or libraries to implement the front-end functionalities.
Back-end: 1. Develop a RESTful API to handle CRUD operations for tasks. 2. Implement endpoints for the following functionalities: - Retrieving all tasks. - Creating a new task. - Retrieving a single task by its ID. - Updating an existing task. - Deleting a task.
3. Use any server-side technology (Node.js, Python with Django/Flask, Ruby on Rails, etc.) to implement the back-end functionalities
ChatGPT
To build a Task Management Application that meets the assignment requirements, we'll follow a structured approach, dividing the project into front-end and back-end parts. Here's a step-by-step plan to guide you through the development process:

Front-end Development
Set Up Project Structure

Create a new project directory.
Inside, create folders for html, css, and js files.
Landing Page

Create an index.html file for the landing page.
Use HTML to structure the list of tasks.
Include a button for adding new tasks.
Task Form

Create a modal or a separate page for adding new tasks (add-task.html).
Use HTML forms to capture the task title, description, and due date.
Task Detail View

Create a detailed view template (task-detail.html) to display detailed information about a task.
Include edit and delete buttons.
Edit Task

Create a form similar to the add task form for editing tasks.
Responsive Design

Use CSS (or a CSS framework like Bootstrap) to ensure the application is responsive.
Make sure the UI is usable on both desktop and mobile devices.
JavaScript for Front-end Logic

Use JavaScript (or a framework/library like React, Vue, or Angular) to handle front-end logic:
Fetch tasks from the back-end API and display them on the landing page.
Handle form submissions for creating and editing tasks.
Handle delete actions.
Back-end Development
Set Up Back-end Environment

Choose a server-side technology (e.g., Node.js with Express).
Initialize the project (e.g., npm init for Node.js).
Define Task Model

Define a Task model/schema (e.g., using Mongoose for MongoDB in a Node.js project).
Create RESTful API

Set up the server and create the following routes/endpoints:
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/:id: Retrieve a single task by its ID.
PUT /tasks/:id: Update an existing task.
DELETE /tasks/:id: Delete a task.
Connect to Database

Set up a database (e.g., MongoDB) and connect to it from the back-end.
Implement CRUD Operations

Write controller functions to handle CRUD operations.
Test the API endpoints using a tool like Postman.
