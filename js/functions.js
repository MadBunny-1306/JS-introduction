function greeting1() {
  window.alert("Hello");
}
//greeting1();

function greeting2(firstname) {
  window.alert("Hello " + firstname + "!");
}
// greeting2("Slady");

function sum(a, b) {
  return a + b;
}
var x = sum(3, 7);
// window.alert(x);

function swap(id1, id2) {
  var y = document.getElementById("id1").innerHTML;
  var z = document.getElementById("id2").innerHTML;

  document.getElementById(id2).innerHTML = y;
  document.getElementById(id1).innerHTML = z;
}
