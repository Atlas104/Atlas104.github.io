// Get the Update Dashboard button

const updateButton = document.getElementById("updateButton");


// Run function when button is clicked

updateButton.addEventListener("click", updateDashboard);


// Function to update greeting and message

function updateDashboard() {

    // Get student name from textbox

    let studentName =
        document.getElementById("studentName").value;


    // Get custom motivational message

    let customMessage =
        document.getElementById("customMessage").value;


    // Update greeting if name is entered

    if (studentName.trim() !== "") {

        document.getElementById("greeting").textContent =
            "Welcome, " + studentName + "!";

    }


    // Update motivational message if text is entered

    if (customMessage.trim() !== "") {

        document.getElementById("studyMessage").textContent =
            customMessage;

    }


    // Update the page background color from the dropdown

    let themeColor =
        document.getElementById("themeColor").value;

    document.body.style.backgroundColor = themeColor;

}


// ---------- Study To-Do List (Extra Credit) ----------

const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");


// Add a task when the button is clicked

addTodoButton.addEventListener("click", addTodo);


// Also add a task when Enter is pressed in the textbox

todoInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTodo();
    }

});


// Function to add a to-do item to the ordered list

function addTodo() {

    let taskText = todoInput.value.trim();

    // Ignore empty entries

    if (taskText === "") {
        return;
    }

    // Create the list item and its text

    let listItem = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create a button to remove the item

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Put it all together and add it to the ordered list

    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);

    // Clear the textbox and refocus it

    todoInput.value = "";
    todoInput.focus();

}
