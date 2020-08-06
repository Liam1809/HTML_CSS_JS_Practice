var num = 5;
// By not declare var num inside function, num acts as a global variable
function name() {
	num = 10;
	console.log(num);
}
// num before name() executed
console.log(num); // 5
// name() called
name(); // 10
// num after name() executed
console.log(num); // 10


var str = "Hello!";
// By declare var str inside function, str acts as a local variable, not global one
function newstr() {
	var str = "Goodbye!";
	console.log(str);
} 
// str before newstr() executed
console.log(str);
// newstr() called
newstr();
// str after newstr() executed
console.log(str);