
// let st = [1, [2, [3], 4], 5];
// console.log(st.flat(Infinity));

// let obj = { name: "Webbrain", title: "IT Center", data: { year: 145 } };

// let name = "webbrain academy";
// let {
//   name: newName,
//   title,
//   data: { year },
// } = obj;
// console.log(obj.data.year);

// let ar = ["apple", "orange", "Kiwi"];
// let [bir, ...res] = ar;
// console.log(res); // ["orange", "Kiwi"]

// const getData = ({ name, id }) => {
//   console.log(name, id);
// };
// getData({ name: "web", id: 1 });

// const getData = (data = {}) => {
//   console.log(data?.name);
// };
// getData({ name: "web", id: 1 });

// let obj = { name: "Webbrain", title: "IT Center", data: { year: 145 } };
// Object.entries(obj).map(([key, value], index) => {
//   console.log(value);
// });

// ========= new Date ============

// let date = new Date(); //2023-02-28T12:19:10.479Z

// console.log(Date.now()); // 1677586905888
// console.log(date.getTime()); //1677587082443
// console.log(date.getDay()); // 2 seshanba
// console.log(date.getDate()); // 28 kun
// console.log(date.getMonth()); // 1 oy
// console.log(date.getFullYear()); // 2023 yil

// const getToday = (symbol) => {
//   let date = new Date();
//   return `Today: ${date.getDate()}${symbol}${
//     date.getMonth() + 1
//   }${symbol}${date.getFullYear()}`;
// };
// console.log(getToday("-"));
// console.log(getToday("/"));

// let date = new Date();
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let weeks = ["Yakshanba", "Dushanba", "Chorshanba"];
// let date = new Date();
// console.log(weeks[date.getDay()].slice(0, 4));

// JSON

let user = {
  name: "webbrain",
  year: 123456,
  data: { fullname: "webbrain academy", founded: 1994 },
};
console.log(
  JSON.stringify(user, ["name", "year", "data", "fullname", "founded"], 2)
); // obj to json

let json = JSON.stringify(user);
let obj = JSON.parse(json); // json to obj
console.log(obj);

