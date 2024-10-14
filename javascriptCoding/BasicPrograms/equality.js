let arr = [1, 2, 3];
console.log(typeof arr);

let obj = { name: "Basava" };
console.log(typeof obj);

/*Loose Equality(==)
performs type coercion, meaning it attempts to convert the operands to the same type before making the comparison
if the operands are diffrent types javascript will try to convert them to the same type before making the comparison
examples:
let num =5;
let strNum ="5";

console.log(num == strNum); // true  */

let num = 5;
let strNum = "5";
console.log(num == strNum); // true */

/*Strict Equality(===)
does not perform type coercion, meaning it does not attempt to convert the operands to the same type before making the comparison
if the operands are diffrent types javascript will return false
examples:
let num = 5;
let strNum = "5";

console.log(num === strNum); // false */

let num1 = 5;
let strNum1 = "5";

console.log(num1 === strNum1); // false */
console.log(num1 === Number(strNum1)); // true */));
