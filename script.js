function addTask()
{
    let input=document.getElementById("taskInput");
    let taskText=input.value.trim();
    if(taskText=="")
    {
        alert("please enter a task");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskText}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value="";




}
function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(task) {
    task.classList.toggle("completed");
}
