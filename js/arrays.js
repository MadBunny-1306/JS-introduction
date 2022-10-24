var shoppingList = ["bread", "eggs", "milk"];
// ili ovaj sledeci red
// // var shoppingList = new Array("bread", "eggs", "milk");

// document.getElementById("myParagraph").innerHTML += "</br>" + shoppingList;
// document.getElementById("myParagraph").innerHTML += "</br>" + shoppingList[0];
// document.getElementById("myParagraph").innerHTML += "</br>" + shoppingList[2];

// umesto 5,6 i 7 reda bolje da se koristi sledeci nacin:
showResult(shoppingList);
showResult(shoppingList[0]);
showResult(shoppingList[2]);
function showResult(x) {
  document.getElementById("myParagraph").innerHTML += "</br>" + x;
}

shoppingList[1] = "yogurt";
showResult(shoppingList);
shoppingList[2] = "oranges";
showResult(shoppingList);
delete shoppingList[1];
showResult(shoppingList);
shoppingList[1] = "yogurt";
showResult(shoppingList);

// za brisanje items in arrays (od koje pozicije pocinjem, koliko itema hocu da obrisem):
shoppingList.splice(1, 1);
showResult(shoppingList);
// za dodavanje - (od koje pozicije pocinjem, koliko itema hocu da obrisem, "item koji dodajem"):
shoppingList.splice(1, 0, "banana", "apple");
showResult(shoppingList);

// sort items by alphabetical order:
shoppingList.sort();
showResult(shoppingList);
// obrnutim redom:
shoppingList.reverse();
showResult(shoppingList);

var myString = "ABCD";
var myArray = myString.split("");
showResult(myArray);
// ako hocu da ogranicim broj itema koji ce se prikazati u array"
var myArray = myString.split("", 2);
showResult(myArray);
