// printReverse()
var printReverse = function(arr) {
	for(let i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);
	}
};
// check
printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

// isUniform()
var isUniform = function(arr) {
	for(let i = 0; i < arr.length; i++){
		if(arr[i] !== arr[i+1]) {
			return false;
		}
	}
	return true;
}
// check
isUniform([1,1,1,1]); // true
isUniform([2,1,1,1]); // false
isUniform(["a","b","p"]); // false
isUniform(["b","b","b"]); // true

// sumArray()
var sumArray = function(arr) {
	let sum = 0;
	arr.forEach(function(element){
		sum+=element;
	});
	return sum;
}
// check
sumArray([1,2,3]); // 6
sumArray([10,3,10,4]); // 27
sumArray([-5,100]); // 95

// max()
var max = function(arr) {
	let targetMax = arr[0];
	arr.forEach(function(element){
		if(targetMax < element){
			targetMax = element;
		}
	});
	return targetMax;
}
// check
max([1,2,3]); // 3
max([10,3,10,4]); // 10
max([-5,100]); // 100