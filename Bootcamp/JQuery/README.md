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

## Events

### click()
- jQuery's click() method is a quick and easy way to add a click listener to element(s)

```sh
//prints when item with id 'submit' is clicked
$('#submit').click(function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
  alert("Someone clicked a button");
});

let colorChange = {
        color: "white",
        background: "black"
    };
    $("h1").click(function(){
        $(this).toggleClass("selected");
    });
    $("button").first().click(function(){
        $(this).css(colorChange);
        alert("Don't Click Me");
    });
```

### keypress()
- jQuery's keypress() method is a quick and easy way to add a keypress listener to element(s)

```sh
//listen for any keypress in any text input
$('input[type="text"').keypress(function(){
  alert("text input keypress!");
});

$('input[type="text"').keypress(function(e){
        // console.log(e);
        if(e.which === 13) {
            let text = $(this).val();
            console.log(text);
            $(this).val("");
        }
    });
```
