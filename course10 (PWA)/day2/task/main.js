// Register Service Worker
window.addEventListener('load', event => {
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('service worker registered')
    })
    .catch(err => {
        console.log(err)
    })
})

// Request Permission
if(!('Notification' in window)){
    console.log('Not supported')
}

Notification.requestPermission(status => {
    console.log('Notification Permission ', status)
})

// Database
var dbPromise = idb.open('TodoDB', 1, function(upgradeDB){
    console.log('create Table')
    upgradeDB.createObjectStore('tasks', {keyPath: 'id', autoIncrement: true})
})

// On Load
onload = function(){
    fillSelects()
    document.getElementById('addBtn').onclick = addTask
    showTasks()
    checkTime()
}

// Fill Day and Year
function fillSelects(){
    var day = document.getElementById('day')
    var year = document.getElementById('year')
    
    for(var i = 1; i <= 31; i++){
        day.innerHTML += '<option value="'+i+'">'+i+'</option>'
    }
    
    var now = new Date()
    for(var i = now.getFullYear(); i <= now.getFullYear() + 5; i++){
        year.innerHTML += '<option value="'+i+'">'+i+'</option>'
    }
    
    day.value = now.getDate()
    document.getElementById('month').value = now.getMonth()
    year.value = now.getFullYear()
}

// Add Task
function addTask(){
    var title = document.getElementById('title').value
    var hours = document.getElementById('hours').value
    var mins = document.getElementById('mins').value
    var day = document.getElementById('day').value
    var month = document.getElementById('month').value
    var year = document.getElementById('year').value
    
    if(!title){
        alert('Enter task title')
        return
    }
    
    var date = new Date(year, month, day, hours, mins, 0)
    
    var task = {
        title: title,
        time: date.getTime(),
        timeText: date.toLocaleString(),
        done: false
    }
    
    dbPromise.then(db => {
        var tx = db.transaction('tasks', 'readwrite')
        var store = tx.objectStore('tasks')
        return store.add(task)
    })
    .then(() => {
        console.log('task added')
        document.getElementById('title').value = ''
        showTasks()
        checkTime()
    })
    .catch(err => {
        console.log(err)
    })
}

// Show Tasks
function showTasks(){
    dbPromise.then(db => {
        var tx = db.transaction('tasks', 'readonly')
        var store = tx.objectStore('tasks')
        return store.getAll()
    })
    .then(tasks => {
        var html = ''
        tasks.forEach(task => {
            var doneClass = task.done ? 'done' : ''
            html += `
                <div class="task ${doneClass}" onclick="toggleTask(${task.id})">
                    <div class="title">${task.title}</div>
                    <div class="time">${task.timeText}</div>
                    <button onclick="event.stopPropagation(); deleteTask(${task.id})" class="delete-btn">
                        Delete
                    </button>
                </div>
            `
        })
        document.getElementById('tasksList').innerHTML = html
    })
}

// Toggle Task
function toggleTask(id){
    dbPromise.then(db => {
        var tx = db.transaction('tasks', 'readwrite')
        var store = tx.objectStore('tasks')
        return store.get(id)
    })
    .then(task => {
        task.done = !task.done
        return dbPromise.then(db => {
            var tx = db.transaction('tasks', 'readwrite')
            var store = tx.objectStore('tasks')
            return store.put(task)
        })
    })
    .then(() => {
        showTasks()
    })
}
// Delete Task
function deleteTask(id) {
    dbPromise.then(db => {
        var tx = db.transaction('tasks', 'readwrite')
        var store = tx.objectStore('tasks')
        return store.delete(id)
    })
    .then(() => {
        console.log("Task deleted:", id)
        showTasks() // refresh list
    })
    .catch(err => {
        console.error("Delete failed", err)
    })
}


// Check Time
function checkTime(){
    dbPromise.then(db => {
        var tx = db.transaction('tasks', 'readonly')
        var store = tx.objectStore('tasks')
        return store.getAll()
    })
    .then(tasks => {
        var now = Date.now()
        
        tasks.forEach(task => {
            if(!task.done){
                var wait = task.time - now
                
                if(wait > 0){
                    setTimeout(() => {
                        showNotif(task)
                    }, wait)
                }
            }
        })
    })
}

// Show Notification
function showNotif(task){
    navigator.serviceWorker.getRegistration()
    .then(reg => {
        var options = {
            body: task.title,
            data: {
                id: task.id
            }
        }
        reg.showNotification('Task Time!', options)
        
        // Mark done
        dbPromise.then(db => {
            var tx = db.transaction('tasks', 'readwrite')
            var store = tx.objectStore('tasks')
            return store.get(task.id)
        })
        .then(t => {
            t.done = true
            return dbPromise.then(db => {
                var tx = db.transaction('tasks', 'readwrite')
                var store = tx.objectStore('tasks')
                return store.put(t)
            })
        })
        .then(() => {
            showTasks()
        })
    })
}