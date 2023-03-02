// let obj = {};
// let map = new Map();
// obj.name = "webbrain";
// map.name = "webbrain IT";

// map.set(123, "name", "IT Center");
// console.log(map.has(123), map);

// let obj = {};
// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "IT Center"],
// ]);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (let vl of map) {
//   console.log(vl);
// }

// let obj = {};
// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "IT Center"],
// ]);

// map.set("name", "wbe");

// console.log(map.title);
// console.log(Object.fromEntries(map).name);

// SET

// let obj = { name: "webbrain" };
// function name(params) {
//   console.log();
// }
// let set = new Set();
// set.add(obj);
// set.add(name);
// console.log(set);

// new Map, WeakMap

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "IT Center"],
// ]);

// let obj = { data: map };
// map = null;

// console.log(map);

// Recursion functions

// n=4
// const sum = (n) => {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   console.log(s);
// };
// sum(5); // 5+4+3+2+1

// let res = 0;
// const sum = (n) => {
//   console.log(n);
//   if (n === 1) {
//     return (res += 1);
//   } else {
//     res += n;
//     return sum(n - 1);
//   }
// };
// sum(5); // 5+4+3+2+1
// console.log(res);

let company = {
  sales: [
    { name: "john", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    dev: [
      { name: "Samar", salary: 200 },
      { name: "Rasul", salary: 250 },
    ],
    internals: [{ name: "'Jack", salary: 1300 }],
  },
};

const getCalc = (company) => {
  if (Array.isArray(company)) {
    return company.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(company)) {
      sum += getCalc(subdep);
    }
    return sum;
  }
};

console.log(getCalc(company));
