// constant definitions
const TAXRATE = 0.085;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 120;

// user input -> Number
// gets the bank balance
var BankBalance = prompt("how much do you have in your bank account?");

// Number -> Number
// returns the value of tax on a purchase
var tax = function(amt) {
	return amt * TAXRATE;
}

console.log(PHONE_PRICE + tax(PHONE_PRICE));

// Number -> String
// formats the price with a “$” and rounds to two decimal places
var formatprice = function(price) {
	return "$" + price.toFixed(2);
}

console.log(formatprice(tax(PHONE_PRICE)));