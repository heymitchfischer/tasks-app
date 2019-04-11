// This is the equivalent of the JavaScript window.addEventListener("load", function() {}). This tells our browser to wait until the document is loaded before modifying content. We select the document object with the jQuery selector, which is the $ followed by (). All of our jQuery and JavaScript will go inside of this function.
$(document).ready(function() {
  // It's conventional to add a $ to the beginning of jQuery variables.
  var $heading = $("#my-heading");
  var $taskButton = $("#task-button");
  var $taskList = $("#task-list");
  var $contentField = $("#name");
  // We use jQuery to select the CSRF Token from our HTML Meta tags so that we can use it in the AJAX web requests.
  var $token = $('meta[name="csrf-token"]').prop("content");

  $heading.html("New Heading");
  $heading.on("click", function() {
    $heading.toggleClass("big-blue-heading");
  });

  $taskList.on("click", function() {
    var $currentTask = $(event.target);
    var $taskId = $currentTask.data("id");

    // We send an AJAX (Asynchonous JavaScript with XML) Request when we want to communicate with our Rails back-end with JavaScript. Example: When you want to save something to the database without reloading the page.
    $.ajax({
      url: `/tasks/${$taskId}`,
      type: "put",
      // JSON: JavaScript Object Notation
      dataType: "json",
      headers: {"X-CSRF-TOKEN": $token},
      success: function() {
        $currentTask.toggleClass("completed");
      },
      error: function() {
        console.log("Something went wrong.");
      }
    });
  });

  $taskButton.on("click", function() {
    event.preventDefault();
    var $newTask = $(`<li>${$contentField.val()}</li>`).hide();
    $taskList.append($newTask);
    $newTask.fadeIn();
    $contentField.val("");
  });
});