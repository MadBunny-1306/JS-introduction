// document.getElementById("myParagraph").innerHTML += "<br/>" + 0;
// document.getElementById("myParagraph").innerHTML += "<br/>" + 1;
// document.getElementById("myParagraph").innerHTML += "<br/>" + 2;
// document.getElementById("myParagraph").innerHTML += "<br/>" + 3;
// document.getElementById("myParagraph").innerHTML += "<br/>" + 4;
// sve ovo gore se lakse pise na sledeci nacin:

for (i = 0; i < 5; i++) {
  document.getElementById("myParagraph").innerHTML += "<br/>" + i;
}

for (i = 7; i > 0; i--) {
  document.getElementById("myParagraph").innerHTML += "<br/>" + Math.pow(i, 2);
}

var shoppingList = ["bread", "milk", "eggs"];
for (i = 0; i < shoppingList.length; i++) {
  document.getElementById("myParagraph").innerHTML += "<br/>" + shoppingList[i];
}

var numberList = [1, 2, 3];
for (i = 0; i < numberList.length; i++) {
  numberList[i] += 10;
}
document.getElementById("myParagraph").innerHTML += "<br/>" + numberList;
