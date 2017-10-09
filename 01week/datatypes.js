'use strict'

// Logs current date

let displayDate = function() {
	let currentDate = new Date();
	console.log('The current date is: ' + currentDate);
	console.log('The date is a type of: ' + typeof(currentDate));
}
displayDate();

// Convert number to string

let convertNumber = function(x) {
	let newString = x.toString();
	console.log('The string is: ' + newString);
	console.log('The string is a type of: ' + typeof(newString));
}
convertNumber(15);


// Convert string to number

let convertString = function(x) {
	let newNumber = parseInt(x);
	console.log('The number is: ' + newNumber);
	console.log('The string is a type of: ' + typeof(newNumber));
}
convertString('6');


// Display datatype of variable

let dataTypes = function(y) {
	let newType = typeof(y);
	console.log('This is type of: ' + newType);
}
dataTypes('true');

// Adding two integers

let calculator = function(a, b){
	let sum = a + b;
	console.log('This sum of the two numbers is: ' + sum);
	console.log('The sum is type of: ' + typeof(sum));
}
calculator(2, 6);

// Run if both things are true

let twoTruths = function(c,d){
	if ( c > 0 && d > 0 ) {
		console.log('Both expressions are true');
	} else {
		console.log('One expression is false');
	}
}
twoTruths(3, 6);


// Run if one of two things are true

let oneTruth = function(e,f){
	if ( e > 0 || f > 0 ) {
		console.log('One expression is true');
	} else {
		console.log('Neither expression is true');
	}
}
oneTruth(-3, 6);


// Run if both things are false

let twoFalse = function(g,h){
	if ( g < 0 && h < 0 ) {
		console.log('One expression is true');
	} else if ( g < 0 || h < 0 ) {
		console.log('One expression is true');
	} else {
		console.log('Both expressions are False');
	}
}
twoFalse(3, 6);
