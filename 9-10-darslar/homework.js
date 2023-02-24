// ================== 1-homework ===========

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// num.forEach((value) => {
//   sum += value;
// });

// console.log(sum); // 45

// console.log(eval(num.join("+"))); // 45

// =============== 2-homework ========

let str = ["webbrain", "Academy"];

// let res = { string: 0, char: 0 };
// for (l of str) {
//   if (typeof l === "string") res.string++;
//   else res.char++;
// }
// console.log(res); // char: 2

//================ 3-homework =====

let str1 = ["webbrain Academy"];
let str2 = ["webbrain Academy"];
console.log(str1.localeCompare(str2)); // 0

// function getRes(str) {
//   let res = {};
//   for (l of str) {
//     if (res[l.toLowerCase()]) {
//       res[l.toLowerCase()] = res[l.toLowerCase()] + 1;
//     } else {
//       res[l.toLowerCase()] = 1;
//     }
//   }
//   return res;
// }
// for (l of str) {
//   console.log(getRes(l));
// }
