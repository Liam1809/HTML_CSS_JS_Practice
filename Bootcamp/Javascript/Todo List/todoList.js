// create empty array
var arr = [];
window.setTimeout(function() {
// put all of your JS code from the lecture here
//  take input
do {
	// ask for new input
	var answer = prompt("What do you want to do?");
	// handle input
	if(answer == "new") {
		// new todo list request
		newTodo();
	}
	// show todo list request
	else if(answer == "list") {
		showTodo();
	}
	// delete request
	else if(answer == "delete") {
		deleteTodo();
	}
}
while(answer != "quit");

function newTodo() {
	// new todo list request
	var todo = prompt("what are you going to do today?");
	arr.push(todo);
	console.log("ADDED!!!");
}

function showTodo() {
	// show todo list request
	console.log("----- TODO LIST -----");
	arr.forEach(function(todo, i){
	console.log(i + ": " + todo);});
}

function deleteTodo() {
	// delete request
	var index = prompt("What index of Todo List to remove?");
	arr.splice(index, 1);
	console.log("REMOVED!!!");
}
}, 500);