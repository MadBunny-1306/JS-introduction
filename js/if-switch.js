// var speed = 60;
// if (speed > 70) {
//   window.alert("You are going too fast!");
// } else if (speed < 40) {
//   window.alert("Your going too slow!");
// } else {
//   window.alert("Your speed is fine.");
// }

function checkSpeed() {
  var speed = document.getElementById("speed").value;
  if (speed > 70) {
    window.alert("You are going too fast!");
  } else if (speed < 40) {
    window.alert("Your going too slow!");
  } else {
    window.alert("Your speed is fine.");
  }
}

function checkSeason() {
  var x = document.getElementById("myInput").value.toLowerCase();
  switch (x) {
    case "summer":
      window.alert("It is summer time!");
      break;
    case "winter":
      window.alert("It is winter time!");
      break;
    case "spring":
      window.alert("It is spring time!");
      break;
    case "autumn":
      window.alert("It is autumn time!");
      break;
    default:
      window.alert("I do not recognize this");
  }
}
