// try {
//   console.log(JSON.parse({ name: "web" }));
// } catch {
//   console.log("smth went wrong");
// }

// function getData() {
//   fetch(`https://jsonplaceholder.typicode.com/photos`);
// }

// let user = null;
// console.log("Started");
// function getData(func) {
//   setTimeout(() => {
//     var user = () => {
//       console.log({ name: "eshmat" });
//     };
//     func(user);
//   }, 1000);
// }

// getData(info);

// function info(call) {
//   call();
//   console.log(user);

//   console.log("Finished");
// }

console.log("Started");

let promise = new Promise((resoleve, reject) => {
  setTimeout(() => {
    let user = { name: "eshmat" };
    if (Date.now() % 2 === 0) {
      resoleve(user);
      // resoleve(`working ${Date.now()}`);
    } else {
      reject(`not Working ${Date.now()}`);
    }
  }, 1000);
});

promise.then((res) => res).catch((err) => err);

// async await

const getData = async () => {
  let data = await promise;
  console.log(data);
  console.log("finished");
};
getData();

// promise
//   .then((res) => {
//     return () => console.log(res, "then");
//   })
//   .catch((err) => console.log(err, "catch"));

console.log("Finished");
