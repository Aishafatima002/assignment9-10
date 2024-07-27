// //Q1
// let cityName=prompt("enter your city");
// if(cityName=="karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("you are not in karachi!")
// }
// //Q2
// let gender=prompt("enter your gender");
// if(gender=="male"){
// document.write("Good morning Sir");}
// else if(gender=="female"){
//     document.write("Good mornig M'am")
// }
// //Q3
// let signalColor=prompt("enter color");
// if(signalColor=="red"){
//     alert("must stop")
// }
// else if(signalColor=="yellow"||signalColor=="green"){
//     alert("ready to move")
//     if(signalColor=="green"){
//         alert("move now")

//     }

//Qno4
// let remainingFuel=+prompt("Enter the remaining fuel","liters")
// if (remainingFuel<0.25) {
//     alert("Please refill your fuel")
// }
// else{
//     alert("your fuel is full")
// }

//Qno5
// let a=4
// if (++a===5) {
//     alert("given condition for a variables a is true")}


//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true) {
// alert("True");
// }
// if (false){
// alert("False")}
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Qno6
// let subject1 = +prompt("Enter the obatained marks of subject 1")
// let subject2 = +prompt("Enter the obatained marks of subject 2")
// let subject3 = +prompt("Enter the obatained marks of subject 3")
// let total_marks = +prompt("Enter the total marks for each subject")
// let total_obtained = subject1 + subject2 + subject3
// let percentage = (total_obtained / (3 * total_marks)) * 100
// let grade, remarks
// if (percentage >= 90) {
//     grade = "A+"
//     remarks = "Excellent"
// }
// else if (percentage >= 80) {
//     grade = "A"
//     remarks="good"
// }
// else if (percentage >= 70) {
//     grade = "B+"
//     remarks="better"
// }
// else if (percentage >= 60) {
//     grade = "B"
//     remarks="you can do better"
// }
// else if (percentage >= 50) {
//     grade = "C"
//     remarks="you need to improve"
// }
// else if (percentage >= 40) {
//     grade = "D"
// }
// document.write("<h2>Results:</h2>");
// document.write("<p>Total Marks: " + total_marks * 3 + "</p>");
// document.write("<p>Marks Obtained: " + total_obtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

//Qno7

let secretNumber = Math.floor(Math.random(3) * 10) + 1;

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
}
//QUESTION N0 8

let number = parseInt(prompt("Enter a number:"));


if (number % 3 === 0) {
  
    alert(number + " is divisible by 3.");
} else {
    
    alert(number + " is not divisible by 3.");
}
 //QUESTION NO 9

let num = parseInt(prompt("Enter a number:"));


if (num % 2 === 0) {
    
    alert(num + " is an even number.");
} else {
   
    alert(num + " is an odd number.");
}
  //QUESTION N0 10

let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    
    alert("It is too hot outside.");
} else if (temperature > 30) {
   
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    
    alert("OMG! Today’s weather is so Cool.");
} else {
  
    alert("It is freezing cold!");
}
//QUESTION NO11
let firstNumber = parseFloat(prompt("Enter the first number:"));


let secondNumber = parseFloat(prompt("Enter the second number:"));

let operator = prompt("Enter the operation (+, -, *, /, %):");



if (operator == '+') { // use + (addition) operator to add two numbers  
    result = firstNumber +secondNumber ;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = firstNumber- secondNumber;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = firstNumber * secondNumber;  
}  
else {  
    result = firstNumber / secondNumber; // use / (division) operator to divide two numbers  
}  
  
 
document.write(" Result is" + result);  