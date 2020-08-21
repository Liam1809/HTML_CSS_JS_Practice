let player1D = document.getElementById("player1D");
let player2D = document.getElementById("player2D");
let scoring = document.querySelector("#scoring");
let input = document.querySelector("input");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let reset = document.getElementById("reset");
let count1 = 0;
let count2 = 0;
let gameOver = false;
let winningScore = 5;

p1.addEventListener("click", function(){
	if(!gameOver){
		count1 ++;
		if(count1 === winningScore){
			gameOver = true;
			player1D.classList.add("winner");
		}
		player1D.textContent = count1;
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		count2 ++;
		if(count2 === winningScore){
			gameOver = true;
			player2D.classList.add("winner");
		}
		player2D.textContent = count2;
	}
});

input.addEventListener("change", function(){
	if(input.value > 0){
	scoring.textContent = input.value;
	winningScore = Number(input.value);
	rs();
	}
	else {
	winningScore = 5;
	}
});

reset.addEventListener("click", function(){
	rs();
});

var rs = function() {
	count1 = 0;
	count2 = 0;
	player1D.textContent = 0;
	player2D.textContent = 0;
	player1D.classList.remove("winner");
	player1D.classList.remove("winner");
	gameOver = false;
};
