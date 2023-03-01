// const getToday = (symbol) => {
//   let date = new Date();
//   return `Today: ${date.getDate()}${symbol}${
//     date.getMonth() + 1
//   }${symbol}${date.getFullYear()}`;
// };
// console.log(getToday("-"));
// console.log(getToday("/"));

// let weeks = ["Dushanba", "sesa"];
// let date = new Date();
// console.log(weeks[date.getDay()].slice(0, 4));
// console.log(weeks[date.getDay()-1]);

// const moment = (symbol) =>
// {
//     let weeks = ["yanvar", "fevral", "mart"]
//     let a = ["mp"]
//     let date = new Date()

//     return `tody: ${weeks[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${a}`
// }
// console.log(moment());



// ============ LT ==========


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

const moment=(symbol)=>{
    let date= new Date()
        let weeks = ["Yanvar", "Fevral", "Mart"]

    let format= [`${weeks[date.getMonth()]} ${date.getDate()}${symbol} ${date.getFullYear()}`]
    let LL=format
return `presentDay: ${LL}`
}
console.log(moment(","));