var p1D = document.getElementById("player1D");
var p2D = document.getElementById("player2D");
var scoring = document.getElementById("scoring");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var count1 = 0;
var count2 = 0;
var gameOver = false;
var winingScore = 5;

p1.addEventListener("click", function(){
	if(!gameOver){
		count1 ++;
		if (count1 === winingScore) {
			gameOver = true;
			p1D.classList.add("winner");
		}
		p1D.textContent = count1;
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		count2 ++;
		if (count2 === winingScore) {
			gameOver = true;
			p2D.classList.add("winner");
		}
		p2D.textContent = count2;
	}
});

input.addEventListener("change", function(){
	scoring.textContent = input.value;
	winingScore = Number(input.value);
	reset();
})

reset.addEventListener("click",function(){
	reset();
});

var reset = function(){
	p1D.textContent = 0;
	p2D.textContent = 0;
	count1 = 0;
	count2 = 0;
	p1D.classList.remove("winner");
	p2D.classList.remove("winner");
	gameOver = false;
};