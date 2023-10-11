let addBtn = document.querySelector("#addBtn");
let inputText = document.querySelector(".input-text");
let taskHolder = document.querySelector(".task-holder");
addBtn.addEventListener("click", function (e) {
    console.log(e.target);
    let appendData = "<div class='list-line'><p class='list-data'>" + inputText.value + "</p><div class='btn-group'><button>✔</button><button>✘</button></div></div>";
    inputText.value != "" ? taskHolder.innerHTML += appendData : "";
    inputText.value = "";
    inputText.focus();
})