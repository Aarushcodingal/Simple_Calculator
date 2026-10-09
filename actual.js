function calculator(){
	alert("Within calculator function");
// Part 1: Make two variables with numbers (no quotes around numbers!)
var num1 = 10;
var num2 = 2;

// Part 2: Do the 4 math operations (+ - * /) and store results in variables
var add = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;

// Part 3: Show the results on the web page using innerHTML
document.getElementById("add").innerHTML = "The added value is: " + add;
document.getElementById("subtract").innerHTML = "The subtracted value is: " + subtract;
document.getElementById("multiply").innerHTML = "The multiplied value is: " + multiply;
document.getElementById("divide").innerHTML = "The divided value is: " + divide;
}