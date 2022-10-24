function phone(make, model, warranty, color) {
  this.make = make;
  this.model = model;
  this.warranty = warranty;
  this.color = color;
  this.extendWarranty = function (x) {
    // this.warranty = this.warranty + x;
    // ovo gore je isto sto i sledeci red
    this.warranty += x;
  };
}

var myPhone = new phone("Apple", "iPhone 5", 12, "white");
window.console.log(myPhone);

myPhone.extendWarranty(12);
window.console.log(myPhone.warranty);

myPhone.condition = "like new";
window.console.log(myPhone.condition);

var myBrothersPhone = new phone("Apple", "iPhone 4", 6, "black");
window.console.log(myBrothersPhone.condition);
phone.prototype.condition = "new;";
window.console.log(myBrothersPhone.condition);
