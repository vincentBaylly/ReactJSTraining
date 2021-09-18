//Destructuring arrays
//Assignation
var arr = ["Hello", "World"];

// destructuring assignment
var [first, second] = arr;

console.log(first); // Hello
console.log(second); // World

//ignoring witn comma
var [one, , , four] = [1, 2, 3, 4];

console.log(one); //1
console.log(four); //4

let [, two, , four] = [1, 2, 3, 4];

console.log(two); //2
console.log(four); //4

//...rest operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, three, ...others] = numbers;
console.log(one); //1
console.log(two); //2
console.log(three); //3
console.log(others); //[4, 5, 6, 7, 8, 9]

//function map
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//function reduce
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//function filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
