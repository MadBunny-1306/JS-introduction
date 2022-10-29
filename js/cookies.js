document.cookie = "username = buenosdias";
document.cookie = "age = 33";
document.cookie = "country = spain";
// window.alert(document.cookie);

var cookie = document.cookie.split(";");
// window.alert(cookie);

for (i = 0; i < cookie.length; i++) {
  document.getElementById("myParagraph").innerHTML += "</br>" + cookie[i];
}

// i nakon svega ovoga gore, kad su definisani cookies, kada bismo obrisali kod, i uneli samo ovaj red ispod, opet bismo dobili alert msg sa cookies jer su oni acuvani na kompu
// window.alert(document.cookie);
