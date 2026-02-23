// State management
let tasks = [];
let taskIdCounter = 0;

// DOM Elements
// We grab these once so we don't have to search the document every time a function runs
const taskDescInput = document.getElementById('taskDesc');
const taskDayInput = document.getElementById('taskDay');
const taskTimeInput = document.getElementById('taskTime');
const pendingList = document.getElementById('pendingList');
const doneList = document.getElementById('doneList');

// Core Functions

function addTask() {
    const desc = taskDescInput.value.trim();
    const day = taskDayInput.value;
    const time = taskTimeInput.value;

    if (!desc) {
        alert("Please enter a task description.");
        return;
    }

    const newTask = {
        id: taskIdCounter++,
        desc: desc,
        day: day,
        time: time,
        isDone: false,
        isEditing: false
    };

    tasks.push(newTask);
    clearInputs();
    renderTasks();
}

function clearInputs() {
    taskDescInput.value = '';
    taskDayInput.value = '';
    taskTimeInput.value = '';
}

function markDone(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.isDone = true;
        renderTasks();
    }
}

function undoTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.isDone = false;
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function clearPending() {

    tasks = tasks.filter(t => t.isDone === true); 
    renderTasks();
}

// Edit Functions

function toggleEdit(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.isEditing = !task.isEditing;
        renderTasks();
    }
}

function saveEdit(id, newDesc) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.desc = newDesc.trim() || task.desc; // Fallback to old desc if empty
        task.isEditing = false;
        renderTasks();
    }
}

// UI Rendering

function renderTasks() {
    pendingList.innerHTML = '';
    doneList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';

        // Format the day/time string if they exist
        let metaText = '';
        if (task.day || task.time) {
            metaText = `<div class="task-meta" >${task.day}   ${task.time}</div>`;
        }

        if (task.isDone) {
            // Render "Done" item (with Undo button)
            li.innerHTML = `
                <div class="task-content">
                    <span class="task-text" style=" color: #9ca3af;">${task.desc}</span>
                    ${metaText}
                </div>
                <div class="task-actions">
                    <button class="btn-undo" onclick="undoTask(${task.id})">Undo</button>
                </div>
            `;
            doneList.appendChild(li);
        } else {
            // Render "Pending" item
            if (task.isEditing) {
                // Edit Mode View
                li.innerHTML = `
                    <div class="task-content" style="width: 100%;">
                        <input type="text" class="edit-input" id="edit-${task.id}" value="${task.desc}">
                    </div>
                    <div class="task-actions">
                        <button onclick="saveEdit(${task.id}, document.getElementById('edit-${task.id}').value)">Save</button>
                    </div>
                `;
            } else {
                // Normal View
                li.innerHTML = `
                    <div class="task-content">
                        <span class="task-text">${task.desc}</span>
                        ${metaText}
                    </div>
                    <div class="task-actions">
                        <button class="btn-done" title="Done" onclick="markDone(${task.id})">✓</button>
                        <button class="btn-edit" onclick="toggleEdit(${task.id})">Edit</button>
                        <button class="btn-delete" title="Delete" onclick="deleteTask(${task.id})">X</button>
                    </div>
                `;
            }
            pendingList.appendChild(li);
        }
    });
}