var tag = document.querySelector("p");
//ADD A CLASS TO THE SELECTED ELEMENT
// tag.classList.add("big");
//REMOVE A CLASS
// tag.classList.remove("big");
window.setInterval(function(){
	//TOGGLE A CLASS
tag.classList.toggle("big");
},2000);

// textContent
var orange = document.getElementsByTagName("li")[0];
console.log(orange);
console.log(orange.textContent);
orange.textContent = "Orange is not my fav color";

var blue = document.getElementsByTagName("li")[1];
console.log(blue);
console.log(blue.textContent);
blue.textContent = "<strong>Blue</strong> is my fav color";

// innerHTML
var red = document.querySelectorAll("li")[2];
console.log(red);
console.log(red.innerHTML);
red.innerHTML = "Red is not my fav color";

var yellow = document.querySelectorAll("li")[3];
console.log(yellow);
console.log(yellow.innerHTML);
yellow.innerHTML = "<strong><em>Yellow</em></strong> is not my fav color";

// Attribute
var img = document.querySelector("img");
// getAttribute()
console.log(img.getAttribute("src"));
// setAttribute()
img.setAttribute("src","https://gdb.voanews.com/D1AC130C-23B0-4F22-A474-0CE5A310313C_w1080_h608_s.jpg");
console.log(img.getAttribute("src"));


var button = document.querySelector("button");
var h1 = document.querySelector("h1");
// element.addEventListener(type, functionToCall);
button.addEventListener("click", function(){
	h1.style.color = "pink";
});

h1.addEventListener("mouseover", function(){
	this.style.color = "blue";});