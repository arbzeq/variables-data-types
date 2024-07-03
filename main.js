/*
EXERCISE 0
 console.log("Hello world!")
*/

/*
Exercises
*/

/*
EXERCISE 1
Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
let age = 29;
console.log("This is my age, ", age)
*/

/*
EXERCISE 2
Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
let firstVariable = 10;
var secondVariable = 20;
const thirdVariable = 30;
Hello();


function Hello() {
    console.log(firstVariable);
    console.log(secondVariable);
    console.log(thirdVariable);
}

The difference is this: let and var have different scopes. Let and var  const can never be changed, compared to let and var.
*/


/*
EXERCISE 3
Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.

let firstVariable = 10.10;
var secondVariable = true;
const thirdVariable = "A STRIIING";

console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);
*/


/*
EXERCISE 4
Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?

const aConstant = 123;
console.log(aConstant);
aConstant = 124;

It doesnt work because you cant reassign a const value. Fix it by setting var or let instead fo const.
*/


/*
EXERCISE 5
Think about one case when we would like to use a boolean value. Discuss it with another person.
When we only want to know where something is true or false or store it.
*/

/*
EXERCISE 6
If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?
const, because then we are sure that if we are to mistakenly redeclare it, we would get an error.
*/

/*
EXERCISE 7
Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
let number1 = 2;
let number2 = 4;
let number3 = number1 + number2;
console.log("Addition", number3);
*/


/*
EXERCISE 8
Reuse the number1 and number2 variables and create three new variables:
result1 should contain the difference (subtraction) between the numbers
result2 should contain the product (multiplication) of the two numbers
result3 should contain the quotient (division) of the two numbers
Log them all to the console.

let result1 = number1 - number2;
let result2 = number1 * number2;
let result3 = number1 / number2;
console.log("Substraction", result1);
console.log("Multiplication", result2);
console.log("Division", result3);
*/

/*
EXERCISE 9
Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.

let a = 5;
console.log(a);
a = a + 5;
console.log(a);
*/

/*
EXERCISE 10
What is the value of a in the console.log?

let a = 10; // Set a to 10
a = a - 4; // Take a and subtract 4 from it, producting 6
a = 7; //Now, set a to 7 (overwriting what it previously was)
a = a + 2; // Add 2 to a, that is it is now 9

console.log(a); // The final value should be 9

Explain each line of code in the previous question for a friend.
*/