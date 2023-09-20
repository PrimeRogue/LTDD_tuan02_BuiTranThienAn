var url = "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/link";

var data = {};
(data.price = "299k"), (data.title = "Túi Phao Trắng Kem");
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url + "/40", true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);
