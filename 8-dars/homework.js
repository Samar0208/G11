// ============== HomeWork ===========

//! 1 taqqoslash;

// let str = "webrain academy";
// let str1 = new String("web");
// let str2 = "webbrain academy";

// console.log(str2.localeCompare(str)); // -1 bunaqa qiymat taqqaslonyotgan qiymatning ichida yo'q bo'lsa -1 chiqadi
// console.log(str2.localeCompare(str1)); // 1 bnaqa qiymat qisman bor bo'lsa 0 chiqadi;
// console.log(str2.localeCompare(str1)); // 0 egzektik to'g'ri bolsa nol qaytaradi

//! ======== 2 ===========

// function getCount(str) {
//   let obj = {};
//   for (char of str) {
//     if (obj.hasOwnProperty(char)) {
//       obj[`${char}`] += 1;
//     } else {
//       obj[`${char}`] = 1;
//     }
//   }
//   return obj;
// }

// console.log(getCount("webbrain")); //{ w: 1, e: 1, b: 2, r: 1, a: 1, i: 1, n: 1 }

//============== 3 =======

// function truncate(str, n) {
//   console.log(str.substring(str, 5)); // webbr

//   console.log(str.slice(n, 5)); // webbr
// }
// truncate("webbrain academy");

// ============== 4 ==========

let sum = {
  dol: "$1200",
};
for (key in sum) {
  if (typeof sum[`${key}`] == "number") {
    sum[`${key}`] = sum[`${key}`];
  }
}
console.log(sum.toString(2));
