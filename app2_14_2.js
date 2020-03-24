let firstNumber = prompt("Type first number","");
let secondNumber = prompt("Type second number","");
let booleanNumber = Boolean(false);
/*let booleanNumber = prompt("Boolean number", "");*/

function trueTest1() {
	if(firstNumber < secondNumber && booleanNumber === true){
		console.log("Your number is " + secondNumber);
	} else if (firstNumber > secondNumber && booleanNumber === true){
		console.log("Your number is " + firstNumber);
	} else if (firstNumber < secondNumber && booleanNumber === false){
		console.log("Your number is " + firstNumber);
	} else if (firstNumber > secondNumber && booleanNumber === false){
		console.log("Your number is " + secondNumber);
} }

/*
	if(firstNumber < secondNumber) {""
		biggestNumber == secondNumber;
		smallestNumber == firstNumber;
	}
	if (booleanNumber == true) {
		console.log("Your number is ",biggestNumber);
	} else if (booleanNumber == false) {
		console.log("Your number is ",smallestNumber);
	}*/
trueTest1();