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

// Template Literal
