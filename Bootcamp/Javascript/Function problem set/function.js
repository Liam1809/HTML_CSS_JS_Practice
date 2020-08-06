// isEven()
console.log("isEven");
// var isEven = function(num){ return (num %2===0)?true:false;}
var isEven = function(num){ return (num %2===0);}
// check
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

// factorial()
console.log("factorial");
var factorial = function(num){ return (num !== 0) ? factorial(num-1) * num : 1;}

// check
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

// kebaToSnake()
console.log("kebaToSnake");
// RegExp with g flag
var kebaToSnake = function(string){ return string.replace(/-/g, "_");}

// check
console.log(kebaToSnake("Hello-world"));
console.log(kebaToSnake("dogs-are-awesome"));
console.log(kebaToSnake("blah"));