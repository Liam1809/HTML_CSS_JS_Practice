# DOM Manipulation
- DOM - Document Object Model
- Interface between JS and HTML/CSS
- Root node of document

# Process
- To select element and manipulate it

# DOM Method
- document.getElementById()
	- Takes a string argument and returns the one element with a matching ID
	- var tag = document.getElementById("highlight");
- document.getElementsByClassName()
	- Takes a string argument and returns a list of elements that have a matching class
	- var tags = document.getElementsByClassName("bolded")[0];
- document.getElementsByTagName()
	- Returns a list of all elements of a given tag name, like \<li\> or \<h1\>
	- var tags = document.getElementsByTagName("li");
- document.querySelector()
	- Returns the first element that matches a given CSS-style selector
	- var tag = document.querySelector("#highlight");
- document.querySelectorAll()
	- Returns a list of elements that matches a given CSS-style selector
	- var tags = document.querySelectorAll("h1");

# DOM Properties

## DOM Manipulation
- changing an element's style
- adding/removing classes
- changing the content of a tag
- changing attributes(src, href, etc.)

## Style
- The style property is one way to manipulate an element's style

```sh
/SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

## Alternative
- Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS

```sh
//INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
```

```sh
/*DEFINE A CLASS IN CSS*/
.some-class {
  color: blue;
  border: 10px solid red;
}
```

```sh
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");
```

## classList
- A read-only list that contains the classes for a given element.  It is not an array.

```sh
/*DEFINE A CLASS IN CSS*/
.another-class {
  color: purple;
  fontSize: 76px;
}
```

```sh
var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");
```
