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

let num = [1, 2, 3, 5, 6];
let res = num.filter((item) => {
  return 12;
});
console.log(res);
