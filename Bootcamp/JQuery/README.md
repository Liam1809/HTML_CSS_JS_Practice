# [JQuery](https://jquery.com)

## Intro
- JQuery is a DOM manipulation library
- Select Elements
- Manipulate Elements
- Create Elements
- Add Event Listeners
- Animate Elements
- Add Effects
- Make HTTP Requests(AJAX)

## Jquery Selectors
- $("selectorGoeesHere")

```sh
//to select all img tags
$("img")  

//to select all elements with class 'sale'
$(".sale") 

//to select element with id "bonus"
$("#bonus") 

//to select all a tags inside of li's
$("li a")  
```

## Manipulating Style
- $(selector).css(property, value)

```sh
//select elem with id "special" and give it a border
$("#special").css("border", "2px solid red");


//we can also pass in an object with styles
 var styles = {
    backgroundColor : "pink",
    fontWeight: "bold"
 };

$("#special").css(styles);
```

```sh
//select all li's and make them yellow
$("li").css("color", "yellow");

//select all elements with class "big"
//and give them an orange border
$(".big").css("border", "1px dashed orange");
```

## [Common JQuery Methods](https://api.jquery.com)
- val()
        - getter: val()
        - setter: val("textHere")
- text()
		- getter: text()
        - setter: text("textHere")
- html()
		- getter: html()
        - setter: html("textHere")
- attr()
		- getter: attr("attribute")
        - setter: val("attribute", "value")
- addClass()
        - addClass("selectedHere")
- removeClass()
        - removeClass("selectedHere")
- toggleClass()
        - toggleClass("selectedHere")