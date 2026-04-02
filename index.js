$(document).ready(function () {
    let counter = 1;

    $("#create-task").click(function () {
        $("#container").prepend(`
      <div class="each-task">
        <input type="checkbox">
        <p>Tarea ${counter}</p>
      </div>
    `);
        counter++;
        $("#tick-completed").click(function () {
            $(".each-task input[type='checkbox']:checked").each(function () {
                $(this).siblings("p").css("color", "green");
            })
        })

        $("#tick-not-completed").click(function () {
            $(".each-task input[type='checkbox']:checked").each(function () {
                $(this).siblings("p").css("color", "red");
            })
        })

        $("#delete-task").click(function () {
            $(".each-task input[type='checkbox']:checked").each(function () {
                $(this).parent().remove();
            })
        })
    });
});