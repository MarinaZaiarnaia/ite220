var time = new Date().getHours();
var myName = document.getElementById("name");
myName.textContent = "Marina";
var greeting = document.getElementById("greeting");
if (time >= 6 && time < 12){
	greeting.textContent = "Good Morning";
}
else if (time >= 12 && time < 18) {
	greeting.textContent = "Good Afternoon";
}
else if (time >= 18 && time < 23) {
	greeting.textContent = "Good Evening";
}
else {
	greeting.textContent = "Good Night";
}
var product = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price = [10,5,1];
var total = 0;
var pay2 = 20;

var productList = document.getElementById("productList");
for (var i = 0; i < product.length; i++){
productList.innerHTML += "<li>" + product[i] + ":$" + price[i] + "</li>";

total += price[i];
}
var discount = document.getElementById("discount");
discount.textContent = "Pay 20% off!";

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + (total - (total*(pay2/100)));


