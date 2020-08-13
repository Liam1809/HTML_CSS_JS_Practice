var tag = document.querySelector("p");
//ADD A CLASS TO THE SELECTED ELEMENT
// tag.classList.add("big");
//REMOVE A CLASS
// tag.classList.remove("big");
window.setInterval(function(){
	//TOGGLE A CLASS
tag.classList.toggle("big");
},2000);