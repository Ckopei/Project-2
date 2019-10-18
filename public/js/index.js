$(document).ready(function () {

  $("#submit-btn").on("click", function () {
    event.preventDefault();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var startingLetter = $("#letter").val().trim();
    var resultNum = parseInt($("#amount").val());
    var userParams = {
      gender: gender,
      ethnicity: ethnicity,
      startingLetter: startingLetter,
      resultNum: resultNum
    };
    console.log(userParams);
    $.ajax({
      type: "POST",
      url: "/search",
      data: userParams
    }).then(function(){
      window.location.href = "/names";
      console.log("Object posted");
    });
  });
});
