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
