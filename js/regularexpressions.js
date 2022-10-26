var str = "Atlanta";
// treci i cetvrti red su jedno isto
// var pattern = new RegExp("a", "g");
// var pattern = /a/g;
// window.alert(str.search(pattern));

// it's gonna search for /a/ and in alert msg show position of that in a string, in this case is 3.. if i put /a/i; it means it's case insensitive so it will show position 0, which is pos of first 'a' in a string ....  and if it's /a/g; then it's global and only shows small a
// window.alert(str.match(pattern));

// to test pattern in a string, weather it exists or not:
// window.alert(pattern.test(str));

var pattern = /[a-z]/g;
// [a-Z] da li sadrzi  i jedno slovo od a do z, radi i sa brojevima npr od 4 do 7 [4-7]/g;
// look for anything other than this (this atn letters): var pattern = /[^atn]/g;
// is there any digits in a string: var pattern = /\d/g;
document.getElementById("string").innerHTML = str;
document.getElementById("pattern").innerHTML = pattern;
document.getElementById("search").innerHTML = str.search(pattern);
document.getElementById("match").innerHTML = str.match(pattern);
document.getElementById("test").innerHTML = pattern.test(str);
