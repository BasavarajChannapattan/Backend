let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
}

function checkSign(number) {
  if (number > 0) {
    return "The number is positive";
  } else if (number < 0) {
    return "The number is negative";
  } else {
    return "The number is zero";
  }
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));

/* Switch statement
switch (expression) {
case value1:
// Code to be executed if expression === value1
break;
case value2:
// Code to be executed if expression === value2
break;
// Additional cases as needed
default:
// Code to be executed if none of the cases match
}

*/

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

/*Loops in JavaScript are control flow structures that allow you to repeatedly
execute a block of code as long as a specified condition is true. Loops are a
fundamental part of programming, as they provide a way to automate repetitive
tasks and iterate over collections of data. JavaScript supports several types of
loops, including the for loop, while loop, and do-while loop. Each type has its own
use cases and syntax.

The for loop is used to iterate over a block of code a specific number of times.

for (let i = 0; i < 5; i++) {
// Code to be executed in each iteration
}
*/

for (let i = 1; i < 5; i++) {
  console.log(i);
}

/*
The while loop is used to iterate over a block of code as long as a specified
condition is true.

while (condition) {
// Code to be executed while the condition is true
}
The while loop is used when you don't know the number of iterations in advance,
and the loop continues as long as the specified condition is true.
*/

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

/* do while loop
Similar to the while loop, but the code block is executed at least once before
checking the condition. */

let j = 0;
do {
  console.log(j); //0 1 2 3 4
  j++; //1, 2 3 4
} while (j < 5);

// Exercise: Multiplication Table

function printMutliplicationTable(num) {
  console.log(`Multiplication table for ${num}`);

  for (let i = 1; i <= 10; i++) {
    let res = num * i;

    console.log(`${num} * ${i} = ${res}`);
  }
}

printMutliplicationTable(5);
printMutliplicationTable(8);

//area of rect angle

function rectAngle(length, width) {
  let res = length * width;
  return res;
}

const rectangleArea = rectAngle(5, 5);
console.log("Area of Rect angle 1:", rectangleArea);

const rectangleArea1 = rectAngle(8, 5);
console.log("Area of Rect angle 2:", rectangleArea1);

function triangle(base, height) {
  //area formula (base *height)/2
  const area = (base * height) / 2;
  return area;
}

const triAngleArea = triangle(4, 6);
console.log("Area of tri: ", triAngleArea);

//Even or odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const res = checkEvenOdd(3);
console.log(res);

/*factorial number with recursion
Where a function call itself in order to solve smaller instance of the same problem, 
recursive function has two components
1. Base case
2. Recursive case

1. The simplest situation where no more work is needed
2. The part where you keep calling the function to break the problem down further.
n!= n*(n-1) *(n-2)....n!*/
function calculateFact(num) {
  if (num <= 1) {
    return 1;
  } else {
    //recursive case n! = n*(n-1)!
    return num * calculateFact(num - 1);
  }
}

var result1 = calculateFact(5);
console.log("Factorial of 5:", result1);

/* Javascript scope and closures

Scope refers to the visibility and accessbility of variables in diff part of ur code.
Javacript has function scope, meaning that variables defined inside a function

Closures occurs when fun is defined within the another func, allowing inner func to access var from outside the function


*/

var globalVar = "I'm from Global variable";
function outerFunction() {
  var outerVar = "I'm from outerFunction";

  function innerFunction() {
    console.log(outerVar);
    console.log(globalVar);
  }
  return innerFunction;
}

var closureFunction = outerFunction();
closureFunction();

//// Coding Exercise: Closure-based Counter

function createCounter() {
  var count = 0;

  function increseCount() {
    count++;
    console.log("count will be :", count);
  }

  return increseCount;
}

var count = createCounter();
count();
count();
count();
count();
