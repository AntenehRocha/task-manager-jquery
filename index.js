$(document).ready(function () {
  let event = $("#create-task").click(function () {
    let taskTitle = $("#task-input").val();
    let taskDescription = $("#description-input").val();
    console.log(taskTitle);
    console.log(taskDescription);

    $("#container").prepend(` 
      <div class="each-task">
        <p> Title: ${taskTitle} </p>
        <p> Description: ${taskDescription} </p>
        <button id="tick-completed">Completed</button>
        <button id="tick-not-completed">No Completed</button>
        <button id="delete-task">Delete</button>
      </div>
    `);
  });

  $(document).on("click", "#tick-completed", function () {
    $(this).closest(".each-task").css("background-color", "green");
  });

  $(document).on("click", "#tick-not-completed", function () {
    $(this).closest(".each-task").css("background-color", "#ffcccc");
  });

  $(document).on("click", "#delete-task", function () {
    $(this).closest(".each-task").remove();
  });
});
