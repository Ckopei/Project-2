$(document).ready(function () {

  $("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var letter = $("#letter").val().trim();
    var resultQuantity = parseInt($("#amount").val());
    console.log(gender, ethnicity, letter, resultQuantity);

  });

});