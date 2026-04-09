let todoList = []
var count = 0

console.log("Hello Todo App!")

function openAddTodoDialog()
{
    dialog.showModal()
}

function closeAddTodoDialog()
{
    dialog.close()
}

function openEditTodoDialog()
{
    dialog.showModal()
}

function closeEditTodoDialog()
{
    dialog.close()
}

function onAddTodo()
{
    console.log("Add a todo clicked!")
    
    let inputText = document.getElementById("addTodoInput").value
    let addTodoDescription = document.getElementById("addTodoDescription").value
    let addTodoDueDate = document.getElementById("addTodoDueDate").value
    let addTodoPriority = document.getElementById("addTodoPriority").value
    let addTodoCompleteID = document.getElementById("addTodoCompleteID").value
    let addTodoStatusID = document.getElementById("addTodoStatusID").value
    if(!inputText || !addTodoDescription || !addTodoDueDate || !addTodoCompleteID)
    {
        alert("Any Field cannot be blank at all!")
    }
    else
    {
        console.log("Input Text: ", inputText)
        todoList.push({
            todoTitle: inputText,
            todoDescription:addTodoDescription,
            todoDueDate: addTodoDueDate,
            todoPriority:addTodoPriority,
            todoID: ++count,
            todoCompletionStatus: addTodoCompleteID,
            todoStatus: addTodoStatusID,
            todoCreationDate: Date.now(),
            todoUpdationDate: Date.now()
        })
        console.log("Todo List: ", todoList)
        document.getElementById("addTodoInput").value = ""
        listAllTodos()
        closeAddTodoDialog()
    }
}

function listAllTodos()
{
    console.log("listAllTodos called!")
    let list = document.getElementById("todoListHTML")
    list.innerHTML = ""
    for(let count = 0; count<todoList.length; count++)
    {
        list.innerHTML = list.innerHTML + "<li onclick='openEditTodoDialog()'> <div style='display: flex;'><input type='checkbox'> <div style='margin-left: 10px;'> "+todoList[count].todoTitle+"<br> "+todoList[count].todoDescription+" </div> </div> </li>"
        // list.innerHTML = list.innerHTML + "<li>  <input type='checkbox'> "+todoList[count].todoTitle+"</li>"
    }
}

function addTestTodo()
{
    let tempCount = 0
    todoList.push({
        todoTitle: "Todo for test "+(++tempCount),
        todoDescription:"Description comes here",
        todoDueDate: "03/04/2026",
        todoPriority:"High",
        todoID: ++count,
        todoCompletionStatus: false,
        todoStatus: "Todo",
        todoCreationDate: Date.now(),
        todoUpdationDate: Date.now()
    })
    console.log("Todo List: ", todoList)
    listAllTodos()
}