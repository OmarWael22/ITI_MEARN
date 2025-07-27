/* 1 */
var userInText = document.querySelector("#txt1");
var userPassText = document.querySelector("#pass1");
var userBtn = document.querySelector("#btn1");
var taskDiv = document.querySelector(".task1")
userBtn.addEventListener("click", function () {
    var userName = userInText.value;
    var userPass = userPassText.value;
    var responseElement = document.createElement("p");
    if (userName == "admin" && userPass == "123") {
        
        responseElement.innerText = "Welcome " + userName;
        taskDiv.innerHTML = "";
        taskDiv.appendChild(responseElement);
    }
    else {
        responseElement.innerText = "not registered";
        taskDiv.appendChild(responseElement);
    }
})

/* 2 */
var arrObj = []; 
var userTaskElement = document.querySelector("#taskname");
var userTaskBtn = document.querySelector("#btn2");
var taskList = document.querySelector(".todolist");
userTaskBtn.addEventListener("click", function () {
    var taskName = userTaskElement.value;
    var taskObj = { Name: taskName, status: "pending" };
    arrObj.push(taskObj);
    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";
    arrObj.forEach((element , index) => {
        // Create the check button
        var checkBtn = document.createElement("input");
        checkBtn.type = "button";
        checkBtn.className = "check";
        checkBtn.value = "✔";
        checkBtn.addEventListener("click", function () {
            element.status = "done";
            displayTasks();
        })
        // Create the cross button
        var crossBtn = document.createElement("input");
        crossBtn.type = "button";
        crossBtn.className = "cross";
        crossBtn.value = "❌";
        crossBtn.addEventListener("click", function () {
            arrObj.splice(index, 1);
            displayTasks();
        })

        // create buttons container
        var optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        optionsDiv.appendChild(checkBtn);
        optionsDiv.appendChild(crossBtn);
        // create p for task name
        var myP = document.createElement("p");
        myP.innerText = element.Name;
        // create div for task
        var taskDiv = document.createElement("div");
        taskDiv.classList.add("item");
        if(element.status == "done") {
            taskDiv.classList.add("done");
        }
        taskDiv.appendChild(myP);
        taskDiv.appendChild(optionsDiv);
        taskList.appendChild(taskDiv);
    });
}
