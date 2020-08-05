var answer = prompt("are we there yet?");

// while(answer !=="yeah" && answer !=="yes") {
// 	var answer = prompt("are we there yet?");
// }
while((answer.indexOf("yes") && answer.indexOf("yeah")) === -1) {
		var answer = prompt("are we there yet?");
}

alert("yay we made it!!!");
