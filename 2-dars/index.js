// let a = 1;
// let b = "1";
// console.log(a + b);

// let str = "Webbrain";
// let str1 = "Academy";

// console.log(str + str1); Webbrain Academy

// let a = "1"; false
// let a = "1s"; true

// console.log(isNaN(a));

// let a = 1;
// let b = "1";
// console.log(a + +b);

// let a = "10";
// let b = "10.3";

// console.log(Number(a)); 10
// console.log(Number.parseInt(a)); 10
// console.log(Number.parseFloat(a)); 10

// console.log(Number(b)); 10.3
// console.log(Number.parseInt(b)); 10
// console.log(Number.parseFloat(b)); 10.3

// ========================== true=!0, !null, !undefined ==================

// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log(false == null); // false
// console.log(false == undefined); // false
// console.log(undefined == null); //true

// console.log(true == "1"); // true
// console.log(false == "a"); // false
// console.log(true == "2"); // false

// let a = 1;
// let b = "10";
// console.log(a / +b);
// console.log(8 % 3);
// console.log(111 % 10);

// console.log(1 + (1 * 1) / 1); // 2
// console.log(1 + (1 * 1) / 1); // 2

// =================== incement--  decrement++  =============

// let a = 11;
// a++;
// a = a + 1;
// console.log(a++); // 11
// console.log(a); // 12
// console.log(++a); // 13
// console.log(a); // 13
// console.log(a++); // 13
// console.log(a++); // 14
// console.log(++a); // 15

// ======================= Obrivations=========

// let a = 50;
// a = a + 10; // 60
// a += 10; // 60 + 10 = 70
// console.log(a);

// ======================= Comparison Taqqoslash=========

// let a = 10;
// let b = 11; // Number
// let c = "11"; // String
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(c <= b); // true
// console.log(c == b); // true
// console.log(c === b); // false

// let str = "a";
// let str1 = "A";
// console.log(str > str1);
// console.log(str < str1);
// console.log("str" < "str1");

// let a = 1;
// let b = 1;
// console.log(a == b); //true
// console.log(a === b); //true
// console.log(a != b); //false

// let check = true;
// console.log(check); // true
// console.log(!check); // false

// ======================== Logical Operation ============

//  OR //
// let ceo = false;
// let admin = false;

// console.log(admin === true || ceo === true); // false
// console.log(ceo || admin); // false

// AND &&

// Evropa
// let id = false;
// let face = true;

// console.log(id && face);

// Uzbek
// let galustik = true;
// let soqol = true;
// let pul = true;

// console.log(galustik && soqol && pul);

// ================================== Uyga vazifa =========================

// Number
//  123, +147 -258

// let a = 15; // typeof number
// let b = +8; // typeof number

// Bigint

// let c = 10025640664232652 + 5; // typeof Number

// console.log(10025640664232652n + 4n); // typeof Bigint

// console.log(a + b);
// console.log(typeof a);

// Srting
// '', "", ``
// let name = "Rasulbek "; // typeof Srting
// let text = "Lorem 'ipsum' dolor, sit amet consectetur adipisicing elit."; //  typeof Srting
// let a = "25"; // typeof strig
// console.log(name);
// console.log(text);
// console.log(name + text); // Rasulbek Lorem 'ipsum' dolor, sit amet consectetur adipisicing elit.

// Boolean
// turu, false

// 2-String consoledan qanday javoblar chiqadi?

// let name = "Ilya";
// console.log(`hello ${1}`); // hello 1
// console.log(`hello ${"name"}`); // hello name
// console.log(`hello ${name}`); // hello Ilya

// let name = "Rasulbek";
// let age = 24;
// console.log(`hello ${name} yoshing nechida ${age} da`);

// let num1 = 1;
// let num2 = 1;

// let num1 = (num2 = 1);
// console.log(num1);

// let a = 2;
// let b = 3;

// console.log(a+(a + b) * b);

// let a = 11;
// a++;
// console.log(a++);
// console.log(0.1 + 0.2 == 0.3);

// =================================== Data taype =========

// Number    -+ 600710025470332  Number shu songaxsh bo'lganini oladi bundan kattasi Bigint

// let str1 = "1234"; // String
// let str2 = "1234'67'"; // String
// let str3 = `1234 ${str1}89`; // String
// let str4 = 1234; // Number

// console.log(typeof str1, typeof str2, typeof str3);

// BigInt     600710025470332  "n" bilan tugaydi shu sondan katta bo'lsa "n" qushib ishlatiladi qushmoqchi bo'lsak ham ayrmoqchi bo'lsak ham

// console.log(60071002547003392n + 1n);

// String - text

// let str1 = "1234"; // String
// let str2 = "1234'67'"; // String
// let str3 = `1234 ${str1}89`; // String

// Boolean    true / false

// Undefined / Null

// let title; // undefined
// let student; // null

// student = 1;
// student = null;

// console.log(title);
// console.log(student);

// Symbol

let id1 = Symbol(1234);
let id2 = Symbol(1234);
console.log(id1 === id2);
