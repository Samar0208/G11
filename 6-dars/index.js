// let title = "Webbeain Academy";
// let year = 2019;
// let location = "Chilonzor";

let titleDig = "Digital One";
let yearDig = 2020;
let locationDig = "Beruniy";

// console.log(title, year, location);
// console.log(titleDig, yearDig, locationDig);

// let webbrain = {
//   title: "Webbeain Academy",
//   year: 2019,
//   location: "Chilonzor",
//   "full name": "IT Academy",
// };

// . []

// console.log(webbrain.location);
// console.log(webbrain["location"]); // daynamik usul
// console.log(webbrain["full name"]); // daynamik usul

// let location = "chilonzor";
// console.log(webbrain.location);
// console.log(webbrain[location]);
// console.log(webbrain["location"]);

// let res = prompt();
// if (webbrain.res) {
//   console.log(webbrain[res]);
// } else {
//   console.log("404");
// }

// let webbrain = {
//   title: "Webbeain Academy",
//   year: 2019,
//   location: "Chilonzor",
//   "full name": "IT Academy",
// };
// webbrain.age = 3;
// delete webbrain["full nam"];
// delete webbrain.location;

// console.log(webbrain);

// user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name = "Pete";
// delete user["name"];
// console.log(user);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (key in salaries) {
//   sum += salaries[`${key}`];
// }
// console.log(sum);
//  ================================================
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(menu);
// for (key in menu) {
//   console.log(typeof menu[`${key}`]);
//   if (typeof menu[`${key}`] == "number") {
//     menu[`${key}`] = menu[`${key}`] / 2;
//   }
// }
// console.log(menu);

// let name = "webbrain academy";
// let users1 = { id: 1, name };
// let users2 = { id: 1, name: name };
// console.log(users1[name]);

// let webbrain={
//     title:"webbrain",
//     year:2019,
//     location:"Chilonzor"

// }

// for(key in webbrain ){
//      console.log(webbrain[key], webbrain[""]);
// }

// let wba1={name:"webbrain"};
// let wba2={name:"webbrain"};
// let wba3 = structuredClone(wba2); 
// console.log(wba3);
// wba2.name="1234";  

// console.log(wba1, wba2, wba3);
// console.log(wba1===wba2);
// console.log(wba1===wba2);
// console.log(wba3===wba2);


// let users={name: "webbrain"}
// let year={year: 2019, kv:200}
// users.year=year.year // 1-usul
    // users={...users, ...year} 2-usul
    // Object.assign(users, year, {test:"t"})
// console.log(users);
// console.log(year);


// let wba={wba: "webbrain"}
// console.log(wba);

// let users={
//     name: "Webbrain",
//     title:"IT Center",
//     fullDesc: function(){
//         return this.name+this.title
//     }
// }
// console.log(users.fullDesc());