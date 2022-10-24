var myPhone = {
  make: "Apple",
  model: "Iphone 4",
  warranty: 12,
  color: "white",
};

delete myPhone.warranty;
window.console.log(myPhone);
window.console.log(myPhone.model);

var myOtherPhone = myPhone;
window.console.log(myOtherPhone);
myOtherPhone.model = "Iphone 5";
window.console.log(myOtherPhone);
window.console.log(myPhone);
