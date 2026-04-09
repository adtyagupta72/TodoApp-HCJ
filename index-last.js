let noTodoLabel = document.getElementById("noTodoLabel")
var dialog = document.getElementById("addTodoID")
if(todoList.length == 0)
{
    noTodoLabel.style = ""
}

let addTodoFormID = document.getElementById("addTodoFormID")

addTodoFormID.addEventListener("submit", function (event)
{
    event.preventDefault()
    console.log("The form is submitted now!!")
    onAddTodo()
});