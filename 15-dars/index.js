// let st1 = {
//   name: "eshmat",
//   surname: "toshmat",
// };
// let st2 = {
//   name: "eshmat",
//   surname: "toshmat",
// };

// function getFull(prop, name) {
//   console.log(this.name, this.surname, prop, name);
// }

// call apply, bind

// getFull.call(st2, "webbrain", "IT");
// getFull.apply(st2, ["webbrain", "IT"]);
// let bind = getFull.bind(st2, "webbrain", "IT");
// bind();

// const obj = { name: "webbrain", age: 123 };
// Object.defineProperty(obj, "name", { writable: false });
// obj.name = "IT";
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// Object.defineProperty(obj, "name", { enumerable: false });

// for (l in obj) {
//   console.log(l);
// }

// console.log(obj);

// const obj = { name: "webbrain", age: 123 };
// Object.defineProperty(obj, "name", { configurable: false });
// obj.title = "web";
// console.log(obj);

// let getPow = (a) => {
//   return fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// let getCached = (func) => {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//     } else {
//       let res = func(x);
//       console.log("new value set");
//       cache.set(x, res);
//     }
//   };
// };
// getPow = getCached(getPow);
// getPow(10);

// let obj1 = { name: "webbrain" };
// let obj2 = { age: 23 };

// // Object.assign(obj1, obj2);

// obj1.__proto__ = obj2;

// console.log(obj1);

let ar = [1, 2, 3, , 45, 56, 8];
Array.prototype.remove = function (n) {
  let res = this.filter((vl) => vl !== n);

  console.log(res);
};
ar.remove(3);
