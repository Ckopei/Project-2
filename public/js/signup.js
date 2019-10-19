$(document).ready(function () {
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  var userData;
  // When the signup button is clicked, we validate the email and password are not blank
  $("#signupBtn").on("click", function (event) {
    event.preventDefault();
    userData = {
      email: $("#defaultLoginFormEmail").val().trim(),
      password: $("#defaultLoginFormPassword").val().trim()
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    $.post("/api/userdata", userData)
      .then(function () {
        window.location.href="/";
        // If there's an error, handle it by throwing up a bootstrap alert
      }).catch(handleLoginErr);
    // If we have an email and password, run the signUpUser function and empty the fields that they typed in
    $("#defaultLoginFormEmail").val("");
    $("#defaultLoginFormPassword").val("");
  });

});
