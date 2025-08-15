var nameInputField = $("#name");
var ageInputField = $("#age");
var addBtn = $("#add");
var tableBody = $("#persons-list tbody");
var tableData = [{name:"omar",age:24}];

/* add-btn even */
addBtn.on("click", function (e) {
    console.log("clicked");
    var userName = nameInputField.val();
    var userAge = parseInt(ageInputField.val());
    if (userName == "" || isNaN(userAge))
        e.preventDefault();
    else {
        
        tableData.push({ name: userName, age: userAge });
        console.log(tableData);
        displayTable(tableData);
    }
})
/* delte btn event */
var deleteBtnTemplate = $("<button>").text("Delete").addClass("delete-btn");
deleteBtnTemplate.on("click", function (e) {
    var parentROW = $(e.target).parent().parent();
    var name = $(parentROW).find("td.name").text();
    var age = $(parentROW).find("td.age").text();
    $(parentROW).remove();
    /* update table data array */
    tableData = tableData.filter(function (ele) {
        return !(ele.name == name && ele.age == age) 
    });
})

/* search button event */
var searchInField = $("#search-item");
var searachBtn = $("#search");
searachBtn.on("click", function () {
    var searchVal = searchInField.val();
    var resData = []
    if (searchVal == "")
        resData = tableData
    else
        resData = tableData.filter(ele => ele.name == searchVal || ele.age == searchVal);
    displayTable(resData);

});

function displayTable(data) {
    tableBody.empty()
    data.forEach(element => {
        var createdRow = createTableRow(element)
        tableBody.append(createdRow)
    });
}

function createTableRow(dataObj) {
    var newRow = $("<tr></tr>")
    var nameCol = $("<td></td>").text(dataObj.name).addClass("name");
    newRow.append(nameCol);
    var ageCol = $("<td></td>").text(dataObj.age).addClass("age");
    newRow.append(ageCol);
    var delCol = $("<td></td>")
    delCol.append(deleteBtnTemplate.clone(true))
    newRow.append(delCol);
    return newRow;
}

