// let text;

// console.log(text);
// ==================================undefined

// let text;
// console.log(text);
// text = " Webbrain Academy";
// ==================================undefined

// let text;
// text = "Webbrain Academy";
// console.log(text);
// ================================="Webbrain Academy"

// let num = 1,
//   a = 2,
//   b = 3;
// console.log(num, a, b);

// let a = (b = c = 3);
// console.log(a, b, c);

// ==================================="Data Types"=====================

// console.log(12345678912345678n + 1n);
// console.log('Welcome to "Webbrain"');
// let name = "Webbrain Academy";

// console.log("Welcome " + name + ", IT Center");
// console.log(`Welcome ${name} IT Center`);

// ======================================="Null vs Undefined"==============

// let a;  undefined
// let b = null; null
// console.log(a, b);

// console.log(null === undefined); false
// console.log(null == undefined); ture

// ======================================="Primitive NON-Primitive"==============

// let a;
// let b = null;
// console.log(a + 1); null
// console.log(b + 1); 1

// let a;
// let b;
// console.log(b === b);  true
// console.log({ b } === { b }); false

// ======================================="Symbols"==============

// let a = Symbol("text");  folse
// let b = Symbol("text");  folse
// console.log(b === a);
// console.log(b == a);

// ======================================="Primitive NON-Primitive"==============

// Object -array, obj, function

let ar = ["Muhammad", 25, "Samariddin", 28];
let obj = { name: "webbrain ", status: "academy" };
let func = () => {};
function test() {
  console.log(ar[2]);
  console.log(obj.name);
}
test();
