/*var a = 12;
if (a > 10) {
  a = 30;
  var b = 67;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);
*/

let a = 12;
console.log("Value of a: " + typeof a);
let b = 12.5;
console.log("Value of b: " + typeof b);
let c = true;
console.log("Value of c: " + typeof c);
let d = "Javascript";
console.log("Value of d: " + typeof d);
let e = null;
console.log("Value of e: " + typeof e);
let f;
console.log("Value of f: " + typeof f);
let g = NaN;
console.log("Value of g: " + typeof g);

max = Number.MAX_VALUE;
console.log(max);

// Cloning
const person = {
  name: "RIYA",
  age: 20,
};

const newP = { ...person, age: 24 };
console.log(person.age);
console.log(newP.age);
newP.age = 23;
console.log(newP.age);

// Destructuring

const obj = {
  bookName: "Rich Dad Poor Dad",
  publishYear: 1930,
  price: 398,
};

const { bookName, publishYear, price } = obj;
console.log(obj.bookName);

const arr = [2, 2, 23, 94];

const [aabra, ca, dabra, abra, cadabra] = arr;
console.log(`aabra : ${aabra} & cadabra: ${cadabra}`);

let entries = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

console.log(typeof entries);

entries = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
];

console.log(typeof entries);

const map = new Map();

console.log(map);

map.set("key", 13);

var something = [[1, 4, 2]];

console.log(typeof something);

something = new Map([
  [1, 3],
  [3, 4],
]);

console.log(typeof something);

const set = new Set();
console.log(set.add(3));
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);

// Sets cannot be filtered until and unless they are converted to arrays

const ans = Array.from(set).filter((id) => id % 2 == 0);
console.log(ans);

const newAns = Array.from(set).reduce((prev, curr) => {
  return prev += curr;
}, 10);

console.log(newAns);
