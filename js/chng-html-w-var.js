var color = "rgb(18, 149, 68)";
document.getElementById("button1").onclick = function () {
  document.getElementById("facebook").style.backgroundColor = color;
};

var x, y, z, appleColor;

document.getElementById("button2").onclick = function () {
  x = Math.round(Math.random() * 256);
  y = Math.round(Math.random() * 256);
  z = Math.round(Math.random() * 256);
  appleColor = "rgb(" + x + ", " + y + ", " + z + ")";
  document.getElementById("apple").style.backgroundColor = appleColor;
  document.getElementById("apple").innerHTML = "<p>" + appleColor + "</p>";
};
