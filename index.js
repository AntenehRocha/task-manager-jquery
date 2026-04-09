$(document).ready(function () {
  // let counter = 1;

  /** 
    $("#create-task").click(function () {
      $("#container").prepend(`
        <div class="each-task">
          <input type="checkbox">
          <p>Tarea ${counter}</p>
        </div>
      `);
      */

  // let taskTitle = $("#task-input").val("");
  // let taskDescription = $("#description-input").val("");

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

  // counter++;

  $("#tick-completed").click(function () {
    $(".each-task").css(function () {
      $(".each-task").css("color", "white");
      $(".each-task").css("background-color", "green");
    });
  });

  $("#tick-not-completed").click(function () {
    $(".each-task").css(function () {
      $(".each-task").css("color", "black");
      $(".each-task").css("background-color", "red");
    });
  });

  $("#delete-task").click(function () {
    $(".each-task").parent().remove();
  });
});
// });
