var counter = document.getElementById("counter");
var x = 0;
var myCounter = setInterval(function () {
  x++;
  counter.innerHTML = x;
}, 1000);
// setInterval - first parameter is function for every second(func for time interval that i want, in this case 1 second), and another parameter is time interval in ms
// setInterval is used to create timing event and clearInterval is used to stop timing event

// run piece of code after 3s when page is loaded:
var delayedWelcomeMessage = setTimeout(function () {
  window.alert("Welcome to our page");
}, 3000);
