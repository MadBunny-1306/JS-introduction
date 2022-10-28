var windowHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
// window.alert(windowHeight);

var screenWidth = window.screen.width;
// window.alert(screenWidth);

// to check height of available screen:
var availableScreenHeight = window.screen.availHeight;
// window.alert(availableScreenHeight);

for (i = 1; i < 5; i++) {
  document.getElementById("div" + i).style.width =
    window.innerWidth / 4 - 10 + "px";
  document.getElementById("div" + i).style.height =
    window.innerHeight - 10 + "px";
}
