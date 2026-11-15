function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    // Create a separate text box inside the list item to hold the task name
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    textSpan.style.cursor = 'pointer'; // Makes it look clickable
    
    // Feature 1: Click the text to toggle the "completed" cross-out look
    textSpan.onclick = function() {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Assemble the parts
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
}

// Feature 2: Listen for the "Enter" key being pressed inside the input box
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});