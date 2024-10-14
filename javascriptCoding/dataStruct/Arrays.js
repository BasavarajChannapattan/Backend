let arr = ["Apple", "Mango", "Banana"];
console.log(arr);
arr[1] = "lime";
console.log(arr[1]);
arr.push("carrot");

//shift- remove first element
arr.shift();
console.log(arr);

//unshift
arr.unshift("Apple");
console.log(arr);

//slice
arr.slice(1, 3);
console.log("slice:", arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//foreach
let n = [1, 2, 3, 4];
n.forEach(function (n) {
  console.log(n);
});

let name = ["Basava", "raj", "xyz"];
name.forEach(function (name) {
  console.log(name);
});

//map
const numbers = [2, 4, 6];
const response1 = numbers.map(Math.sqrt);
console.log(response1);

const persons = [
  {
    firstName: "Basava",
    lastName: "Qwe",
  },
];

const res = persons.map(getFullName);
console.log("list firstNames:", res);

function getFullName(item) {
  return [item.firstName].join("");
}

/*Sets:is a collection unique values, it can be used to elimanate duplicate values from an array or to store unique values


let uniq= new Set[1,2,3,4,5]*/

let uniqueNum = new Set([1, 2, 3, 4, 5]);
console.log(uniqueNum);

uniqueNum.add(6);
console.log(uniqueNum);
uniqueNum.forEach((value) => {
  console.log(value);
});

//Maps: is a collection of key and value pairs like an obj

//lets create map
let fruitMap = new Map();
//Adding key-value pairs
fruitMap.set("apple", 8);
fruitMap.set("Banana", 3);
console.log(fruitMap.get("apple"));
//checking existance
console.log(fruitMap.has("orange"));

//iterating through the key and value pairs
fruitMap.forEach((value, key) => {
  console.log(key + ": " + value);
});
