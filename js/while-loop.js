var i = 0;
while (i < 5) {
  document.getElementById("myParagraph").innerHTML += "<br/>" + i;
  i++;
}

function initiateGame() {
  var balance = 1000;
  var itemsBought = 0;
  while (balance > 0) {
    var itemPrice = Math.floor(Math.random() * 100);
    if (itemPrice <= balance) {
      itemsBought += 1;
      balance -= itemPrice;
      document.getElementById("balance").innerHTML +=
        "<p> Purchase amount: $" +
        itemPrice +
        ". New Balance: $" +
        balance +
        ". </p>";
    }
  }
  document.getElementById("balance").innerHTML +=
    "<p> You bought: " + itemsBought + " items. </p>";
}
