# DOM Manipulation
- DOM - Document Object Model
- Interface between JS and HTML/CSS
- Root node of document

# Process
- To select element and manipulate it

# Method
- document.getElementById()
-- Takes a string argument and returns the one element with a matching ID
-- var tag = document.getElementById("highlight");
- document.getElementsByClassName()
-- Takes a string argument and returns a list of elements that have a matching class
-- var tags = document.getElementsByClassName("bolded")[0];
- document.getElementsByTagName()
-- Returns a list of all elements of a given tag name, like <li> or <h1>
-- var tags = document.getElementsByTagName("li");
console.log(tags[0]);
- document.querySelector()
-- Returns the first element that matches a given CSS-style selector
-- var tag = document.querySelector("#highlight");
- document.querySelectorAll()
-- Returns a list of elements that matches a given CSS-style selector
-- var tags = document.querySelectorAll("h1");
