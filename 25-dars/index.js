// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       console.log(a + b + c);
//     };
//   };
// };

// console.log(sum(1)(2)(3));

// const sum = (a) => {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// console.log(sum(1)(2)(3)(4)());

let user = {
  email: "webbrain@academy",
  _pw: 12354,
  title: "eshmat",
};

let proxy = new Proxy(user, {
  get(target, prop) {
    if (prop === "_pw") {
      return "not allowed";
    } else return target[prop];
  },
  set(target, prop, value) {
    if (prop === "_pw") {
      return false;
    } else {
      target[prop] = value;
    }
  },
});

proxy.title = 654;
console.log(user.email);
console.log(proxy);
