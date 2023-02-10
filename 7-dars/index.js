// let name = { test: "webbrain", info: undefined };
// console.log(name?.info?.call);

// let obj = {
//   name: "Samar",
//   age: 25,
//   child: {
//     name: "Sahib",
//     age: 22,
//     child: {
//       name: "Rasul",
//       age: 21,
//     },
//   },
// };

// let sum = 0;
// while (1) {
//   if (obj) sum += obj.age;
//   else break;
//   obj = obj.child;
// }
// console.log(sum);

// console.log(1_000_000 + 500);

// console.log(1e500);

// console.log(0.1 + 0.2 === 0.3); // false

// console.log(0.2 + 0.2 === 0.4); // true

// console.log(Number(0.1 + 0.2).toFixed(1)); // 0.3

// let num = 0.1 + 0.2;
// console.log(Number(num.toFixed(1))); // +, Number

// let num = "0.1 + 0.2";
// console.log(parseInt(num)); // 0
// console.log(parseFloat(num)); // 0.1
// console.log(Number(num)); // NaN
// console.log(Number(eval(num))); // 0.30000000000000004

// console.log(1_0000 + 1); // 10001

// console.log(+"1_000" + 1); // NaN

// let num = 5;

// console.log(num.toString(2));

// let a = 100000;
// let b = "100_000";

// console.log(a);
// console.log(b);

// console.log(parseInt(a) + b);

// console.log(Number(a) + b);

// let a = 1.5;
// console.log(Math.floor(a)); // 1
// console.log(Math.ceil(a)); // 2
// console.log(Math.round(a)); // 2

// console.log(parseInt(Math.random() * 100));
// console.log(Math.pow(2, 4)); // 16

// console.log(Math.sign(12)); // 1

// let a = 3;

// console.log(parseInt(a.toString(2),2));

// let a=3;
// console.log(isNaN(12*"hg")); // true

let a=3.123456
console.log(a.toPrecision(2));
console.log(a.toFixed(2));