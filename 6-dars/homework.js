// ========== 1-homework =======

// user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name = "Pete";
// delete user["name"];
// console.log(user); // surname: "Smith"

// Tarif: bu yerda object ochilayapdi uninig ichiga key value yozilayapdi birinchi key ning valuesini "Pete" ga o'zgartrib keyin esa delete qilib shu keyni uchirib yuborilayapdi;

//=========== 2-homework =============

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (key in salaries) {
//   sum += salaries[`${key}`];
// }
// console.log(sum); // 390

// Tarif: bu  dasturda yana bita o'zgarivchiga qiymat berib for loop qilib aylantirib ochilgan o'zgarivchiga obektdagi valuelarni qushub chiqarildi;

//=========== 3-homework =============

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My meue",
// };

// for (key in menu) {
//   if (typeof menu[`${key}`] == "number") {
//     menu[`${key}`] = menu[`${key}`] / 2;
//   }
// }

// console.log(menu); // { width: 100, height: 150, title: 'My meue' }

// let menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// for (key in menu) {
//   if (typeof menu[`${key} `] == "number") {
//     menu[`${key}`] = menu[`${key}`] / 2;
//   }
// }
// console.log(menu); // { width: 400, height: 600, title: 'My menu' }

// Tarif: bu dasturda shart shunaqa edi number tipdagilarni ikkiga bo'lib chiqarish kerak edi buning uchun biz for loop opertoridan foydalandik va if ham ishlatdik typeof number tupdagilarni ikkiga bo'lib chiqardik;

// =========== 3-homework =============

// let calculator = {
//   read: function (a, b) {
//     console.log(`1-son: ${a}, 2-son: ${b}`);
//   },
//   sum: function (a, b) {
//     return a + b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.sum(10, 20));
// console.log(calculator.mul(10, 200));
