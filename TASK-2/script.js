let addBtn = document.querySelector("#addBtn");
let inputText = document.querySelector(".input-text");
let taskHolder = document.querySelector(".task-holder");

let deleteTask;
let completeTask;

addBtn.addEventListener("click", function (e) {
    // console.log(e.target);
    let appendData = "<div class='list-line'><p class='list-data'>" + inputText.value + "</p><div class='btn-group'><button class='complete-task'>✔</button><button class='delete-task'>✘</button></div></div>";
    
    console.log(taskHolder.children)

    inputText.value != "" ? taskHolder.innerHTML += appendData : "";
    inputText.value = "";
    inputText.focus();

    deleteTask = document.querySelectorAll(".delete-task");
    completeTask = document.querySelectorAll(".complete-task");
    
    deleteTask.forEach(function (element) {
        element.addEventListener("click", function (e) {
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();
            // console.log(e.target);
            
        })
    });
    

    completeTask.forEach(function (element) {
        element.addEventListener("click", function (e) {
            console.log( element.parentElement.innerHTML);
            console.log(element.parentElement);

            element.parentElement.parentElement.innerHTML = "<del><p class='list-data'>" + element.parentElement.parentElement.children[0].innerHTML + "</p></del><div class='btn-group'>" + element.parentElement.innerHTML + "</div>";

            deleteTask = document.querySelectorAll(".delete-task");

            deleteTask.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    // console.log(e.target.parentElement.parentElement);
                    e.target.parentElement.parentElement.remove();
                    // console.log(e.target);
                    
                })
            });
            // console.log(element.parentElement.parentElement.innerHTML)
            // let modifiedAppendData = 
        })
    })
})


