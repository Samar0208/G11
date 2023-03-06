// =========== 1 factorials =======

// const sum = (n) => {
//   let s = 0;
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * sum(n - 1);
//   }
// };
// console.log(sum(5)); // 120

// 1 1! = 1
// 2 2! = 2 * 2 = 2
// 3 3! = 3 * 2 * 1 = 6
// 4 4! = 4 * 3 * 2 * 1 = 24
// 5 5! = 5 * 4 * 3 * 2 * 1 = 120

// ============ 2 fibonacci nambers ==========

// const fib = (n) => {
//   let sum = [0, 1];
//   if (n === 0 || n === 1) {
//     return sum.slice(0, n + 1);
//   }

//   for (let i = 2; i <= n; i++) {
//     sum.push(sum[i - 1] + sum[i - 2]);
//   }
//   return sum;
// };

// console.log(fib(3)); // 2
// console.log(fib(5)); // 5
// console.log(fib(7)); // 17
// console.log(fib(77)); // 5527939700884757

{
  let s = "web";
}
console.log(s);
