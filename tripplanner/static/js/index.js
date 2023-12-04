function validate_form() {
  var pass = document.getElementById("password-field");
  var c_pass = document.getElementById("confirm-password-field");
  if (pass.value != c_pass.value) {
    alert("Confirm password and password are different, please correct it");
  }
}
