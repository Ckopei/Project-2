$(document).ready(function () {
  $(document).on("click", "#removeFromPage", function () {
    //this.closest goes up one level of parent until it finds one with an class of parentRow, then removes it from the page.
    $(this).closest(".parentRow").remove();
  });

  $(document).on("click", "#saveThisName", function () {
    //insert code for pushing to database here.
    //use $(this).siblings(".supertext").text() to grab the name.
    console.log($(this).siblings(".supertext").text());
  });
});