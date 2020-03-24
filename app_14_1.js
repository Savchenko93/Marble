let productTotalCost = prompt("Введіть загальну вартість покупок","");
let discount = 1;
let currency = "dollars"

if (productTotalCost < 1000) {
	discount = 3;
}	else if (productTotalCost >= 1000 && productTotalCost < 5000 ) {
	discount = 5;
}	else if (productTotalCost >= 5000) {
	discount = 7;
}

function countDiscount() {
	let productTotalCostWithDiscount = productTotalCost - (productTotalCost * discount/100);
	console.log("Ваша знижка " + discount + ". " + "До сплати : " + productTotalCostWithDiscount + " " + currency);
}
countDiscount();
