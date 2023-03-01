// ============ LT ==========
let date = new Date();
let months = ["yanvar", "fevral", "mart", "Aprel"];

// const moment=(symbol)=>{
//     let date= new Date()
//     let format= [`${date.getHours()}${symbol}${ date.getMinutes()}`]
//     let LT=format
// return `hour: ${LT}`
// }
// console.log(moment(":")); // hour: 7:50

// ============== LTS ======

// const moment=(symbol)=>{
//     let date= new Date()
//     let format= [`${date.getHours()}${symbol}${date.getMinutes()}${symbol}${date.getSeconds()}`]
//     let LTS=format
// return `hours: ${LTS}`
// }
// console.log(moment(":")); // hours: 7:56:32

// ============== L ==================

// const moment=(nol, symbol)=>{
//     let date= new Date()
//     let format= [`${nol}${date.getDate()}${symbol}${nol}${date.getMonth()}${symbol}${date.getFullYear()}`]
//     let L=format
//     return `presentDay: ${L}`
// }
// console.log(moment("0","/")); // presentDay: 01/02/2023

// =================== l =============

// const moment=(symbol)=>{
//     let date= new Date()
//     let format= [`${date.getDate()}${symbol}${date.getMonth()}${symbol}${date.getFullYear()}`]
//     let l=format
// return `presentDay: ${l}`
// }
// console.log(moment("/")); // presentDay: 1/2/2023

// ========== LL =========

// const moment = (symbol) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];

//   let format = [
//     `${
//       months[date.getMonth()]
//     } ${date.getDate()}${symbol} ${date.getFullYear()}`,
//   ];
//   let LL = format;
//   return `presentDay: ${LL}`;
// };
// console.log(moment(",")); // presentDay: Mart 1, 2023

//=============== ll ==============

// const moment = (symbol) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];
//   let format = [
//     `${months[date.getMonth()].slice(
//       0,
//       3
//     )} ${date.getDate()}${symbol} ${date.getFullYear()}`,
//   ];
//   let ll = format;
//   return `presentDay: ${ll}`;
// };

// console.log(moment(",")); // presentDay: Mar 1, 2023

// ============ LLL =========

// const moment = (symbol, twoPoints, am) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];

//   let format = [
//     `${
//       months[date.getMonth()]
//     } ${date.getDate()}${symbol} ${date.getFullYear()} ${date.getHours()}${twoPoints}${date.getMinutes()} ${am}`,
//   ];
//   let LLL = format;
//   return `presentDay: ${LLL}`;
// };
// console.log(moment(",", ":", "AM")); // presentDay: Mart 1, 2023 10:10

// ============== lll =========

// const moment = (symbol, twoPoints, am) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];
//   let format = [
//     `${months[date.getMonth()].slice(
//       0,
//       3
//     )} ${date.getDate()}${symbol} ${date.getFullYear()} ${date.getHours()}${twoPoints}${date.getMinutes()} ${am}`,
//   ];
//   let lll = format;
//   return `presentDay: ${lll}`;
// };

// console.log(moment(",", ":", "AM")); // presentDay: Mar 1, 2023 10:23 AM

//========== LLLL ======

// const moment = (symbol, twoPoints, am) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];
//   let week = [
//     "Dushanba",
//     "Seshanba",
//     "Chorshanba",
//     "Payshanba",
//     "Juma",
//     "Shanba",
//     "Yakshanba",
//   ];
//   let format = [
//     `${week[date.getDay() - 1]}${symbol} ${
//      months weeks[date.getMonth()]
//     } ${date.getDate()}${symbol} ${date.getFullYear()} ${date.getHours()}${twoPoints}${date.getMinutes()} ${am}`,
//   ];
//   let llll = format;
//   return `presentDay: ${llll}`;
// };

// console.log(moment(",", ":", "AM")); // presentDay: Chorshanba, Mart 1, 2023 10:56 AM

// ================== llll ==========

// const moment = (symbol, twoPoints, am) => {
//   let date = new Date();
//   let months = ["Yanvar", "Fevral", "Mart"];
//   let week = [
//     "Dushanba",
//     "Seshanba",
//     "Chorshanba",
//     "Payshanba",
//     "Juma",
//     "Shanba",
//     "Yakshanba",
//   ];
//   let format = [
//     `${week[date.getDay() - 1].slice(0, 4)}${symbol} ${months[
//       date.getMonth()
//     ].slice(
//       0,
//       3
//     )} ${date.getDate()}${symbol} ${date.getFullYear()} ${date.getHours()}${twoPoints}${date.getMinutes()} ${am}`,
//   ];
//   let llll = format;
//   return `presentDay: ${llll}`;
// };

// console.log(moment(",", ":", "AM")); // presentDay: Chor, Mar 1, 2023 10:55 AM

// const moment = (symbol) => {
//   let months = ["yanvar", "fevral", "mart"];

//   let date = new Date();

//   return `tody: ${
//     months[date.getMonth()]
//   } ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${symbol}`;
// };
// console.log(moment("am")); // tody: mart 1 2023, 11:5:58 am

// const moment = () => {
//   let week = [
//     "Dushanba",
//     "Seshanba",
//     "Chorshanba",
//     "Payshanba",
//     "Juma",
//     "Shanba",
//     "Yakshanba",
//   ];

//   let format = [`${week[date.getDay() - 1]}`];
//   let dddd = format;
//   return `week: ${dddd}`;
// };

// console.log(moment());

// const moment = () => {
//   let format = `${months[date.getMonth()].slice(0, 3)} ${date.getDate()} ${date
//     .getFullYear()
//     .toString()
//     .slice(2, 4)}`;
//   let MMM = format;
//   return `MMM Do YY: ${MMM}`;
// };
// console.log(moment()); // MMM Do YY: mar 1 23
