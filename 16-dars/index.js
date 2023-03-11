// const obj = {
//   id: 2,
//   get() {
//     console.log(this);
//     fetch(`https://jsonplaceholder.typicode.com/${this.id}`);
//   },
// };

// let get = () => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => res.json())
//     .then((res) => {
//       res.map((value) => {
//         let div = document.createElement("div");
//         div.innerHTML = value.name;
//         info.append(div);
//       });
//     });
// };

// const getCached = (func) => {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     } else res = func.call(this, x);
//     console.log("cached");
//     return cache.set(x, res);
//   };
// };
// obj.get = getCached(obj.get);

const obj = {
  name: "webbrain",
  surname: "academy",
  get getName() {
    console.log(this.name, this.surname);
  },
  set getName(vl) {
    console.log(vl);
  },
};
obj.getName = "eshmat toshmat";
obj.getName;
