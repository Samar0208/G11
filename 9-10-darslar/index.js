// ============== Array ===========
let st = { name: "Webbrain", id: 1, surName: "IT Academy" };

let univ = [[1, 2, 3], 4];

// console.log(univ[0][1]);
// console.log(Object.keys(st));
// console.log(Object.values(st));
// console.log(Object.entries(st));
// console.log(
//   Object.fromEntries([
//     ["title", "webbrain"],
//     ["id", 1],
//   ])
// );
// let arr = new Array(4);
// console.log(arr.length);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.toString());

// let arr1 = ["olma", "uzum", "glos"];
// let arr2 = [4, 5, 6];

// for (v of arr1) {
//   console.log(v);
// }

// for (v in arr1) {
//   console.log(v);
// }

// let arr1 = ["olma", "uzum", "glos"];
// arr1.push("shaftoli");
// arr1.unshift("nok");
// arr1.shift();
// arr1.pop();
// console.log(arr1);

// let arr1 = ["olma", "uzum", "glos"];
// let num = [1, 2, 3, 4, 5, 6];

// console.log(num.slice(1, 4));
// console.log(num);

// console.log(num.splice(3, 4));
// console.log(num);

// console.log(num.indexOf(6));
// console.log(num.includes(8));

// let num = [1, 2, 3, 4, 5, 6];
// let res = num.find((item, index) => {
//   return 5;
// });
// console.log(res);

// let num = [1, 2, 3, 5, 6];
// let res = num.filter((item) => {
//   return 12;
// });
// console.log(res);

// console.log([1, 2, 3, 4] + [0]);
// console.log(eval([1, 2, 3, 4].join("+")));

// let arr = ["olma", "uzum", "glos", "olcha"];

// let res = arr.filter((value, index) => {
//   console.log(value.includes("o"));

//   return value.includes("o");
// });

// console.log(res);

// let num = [1, 2, 3, 4, 5, 6];
// let arr = ["olma", "uzum", "glos", "olcha"];
// let res = arr.findIndex((value, index) => {
//   console.log(value);
//   return value === "glos";
// });

// console.log(res); // 2

// let num = [9, 11, 8, 2, 6, 3, 4, 5, 16];
// console.log(num.sort((a, b) => a - b));

// let arr = ["olma", "uzum", "glos", "olcha"];
// console.log(arr.sort((a, b) => a.localeCompare(b)));

// let num = [9, 11, 8, 2, 6, 3, 4, 5, 16];
// let res = num.every((value) => value > 0); // false
// let res = num.some((value) => value > 0); // true
// console.log(res);

// let num = "12345";
// let res = Array.from(num); // [ '1', '2', '3', '4', '5' ]
// let res = Array.from(num, (v) => Number(v)); // [ 1, 2, 3, 4, 5 ]

// console.log(res);

// let num = [9, 11, 8, 2, 6, 3, 4, 5, 16];
// let res = num.forEach((value, index) => {
//   console.log(value);
// });
// console.log(res); // undefind

// let num = [9, 11, 8, 2, 6, 3, 4, 5, 16];
// let res = num.map((value, index) => {
//   console.log(value);
//   return value;
// });
// console.log(res);

// let num = [1, 2, 3, 4, 5, 6, 7];
// num.fill(3, 1, 5);

// console.log(num); //[ 1, 3, 3, 3, 3, 6, 7]

// let num = [1, 2, 3, 4, 5, 6];
// num.copyWithin(0, 2, 5);
// console.log(num);

// let num = [[[[1, 2, 3, 4, 5, 6]]]];
// console.log(num[0][0][0][2]); // 3

// let num = [1, [2, [3, 4], 5], 6];
// let n = [1, 2, 3, 4, 5, 6, 7];
// console.log(eval(n.join("+"))); // 28
// console.log(num[2]); // 6

// let sum = 0;
// n.forEach((value) => {
//   sum += value;
// });
// console.log(sum); // 28

// let num = [[[[[[[[1, [2, [3, 4], 5], 6]]]]]]]];
// console.log(num.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]

// let num = [1, [2, [3, 4], 5], 6];

// let res = num.flatMap((v) => v);
// console.log(res); // [ 1, 2, [ 3, 4 ], 5, 6 ]

let num = [1, 2, 3, 4, 5, 6, 7];
let res = num.reduce((cur, value) => {
  console.log(cur, value);
  return cur + value;
}, 0);
console.log(res);
