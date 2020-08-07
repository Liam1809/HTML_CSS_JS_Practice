// create empty array
var arr = [];
window.setTimeout(function() {
// put all of your JS code from the lecture here
//  take input
do {
	var answer = prompt("What do you want to do?");

	if(answer == "new") {
		var todo = prompt("what are you going to do today?");
		arr.push(todo);
	}
	else if(answer == "list") {
		console.log(arr);
	}
}
while(answer != "quit");

}, 500);