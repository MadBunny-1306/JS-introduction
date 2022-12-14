// try {
//   sum(3, 4);
// } catch (err) {
//   document.getElementById("error").innerHTML = err.message;
// }

function check() {
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var errorMessage = document.getElementById("error");
  var errorToThrow = "";
  try {
    if (password.length < 6) {
      errorToThrow += "</br> Pasword too short.";
    }
    if (/[A-Z]/g.test(password) == false) {
      errorToThrow +=
        "</br> Password should include at least one capital letter.";
    }
    if (/\d/g.test(password) == false) {
      errorToThrow += "</br> Password should include at least one digit.";
    }
    if (password != password2) {
      errorToThrow += "</br> Passwords should match.";
    }
    throw errorToThrow;
  } catch (err) {
    errorMessage.innerHTML = err;
  }
}
