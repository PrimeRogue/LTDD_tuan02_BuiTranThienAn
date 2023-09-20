var url = "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/link";
var data = {};

(data.link =
  "https://shopee.vn/product/122885053/16766984882?smtt=0.132406576-1664784701.9&utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_17365760050&utm_term=88h8yum8cb91"),
  (data.price = "199k"),
  (data.image = "https://cf.shopee.vn/file/50b214b1bb2a3f2d06177b3f87435c92"),
  (data.title = "Túi Phao Trắng"),
  (data.id = "401");
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);
