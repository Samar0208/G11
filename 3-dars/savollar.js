// ================ if else ================

// "if" agar degan manoni anglatadi
// "else" yoki degan manoni anglatadi

// if() qavus nimaga - kerak bu birat bir qiymat berganimizda true false ekanligini aniqlab berish uchun kerak
//

// console.log(true || false, false || true); true - bunda bitta tomon true bo'lsa true chiqaradi
// console.log(true && false, false && true); false - bunda bitta tomon false bo'lsa ikki tomoni ham false deb oladi. bu faqatgina har ikki tomoni ham bir xil qiymatga ega bo'lsa shunda true chiqaradi

// ================= Nullish ====
// ?? - bu faqatgina null bilan undefined ni ko'zatadi bunda false yozsa ham qabul qiladi

//  null va undefined - odatda kupraq stetlarni taqqoslash operatsiyasi bo'lganda shularni ishlatib ketiladi

//  ======================= If else Nullish ===================

//  - If else with singe conditon
//  - If else with multi state condition
//  - If else with boolean conversion
//  - order in if
//  - Nullish
//  - difference between ?? and ||

//  - If else ishlatilish qanday?
//  - Else if qanday ishlaydi?
//  - Else if larni to'g'ri joylashtirish.
//  - Ternary nima?
//  - Nullish nima?
//  - ?? va || farqi nimada

//!If else

// let num = 1;

// if (num > 0) {
//   console.log("num katta 0 dan");
// } else {
//   console.log("num katta emas 0 dan");
// }

//! Else if

// let a = -1;

// if (a > 0) console.log(1);
// else if (a == 0) console.log(0);
// else console.log(-1);

//! Order

// let temp = 10;

// if (temp <= 0) console.log("Havo juda sovuq!");
// else if (temp <= 10 && temp > 0) console.log("hovo iliq!");
// else if (temp <= 20 && temp > 10) console.log("Havo issiq!");
// else console.log("Havo juda issiq");

// Ternary operatori
// ternary bu if else ga uxshab ishlaydi lekin buni else if qushmaganimiz maqul faqat bitta if va esls dan foydalasnsak optemal variant bo'ladi.

// if == ? ga teng
// else == : ga teng

// let a = 15;
// if (a == 5) console.log(5);
// else if (a == 10) console.log(10);
// else if (a == 15) console.log(15);
// else console.log(0);

// a == 5
//   ? console.log(5)
//   : a == 10
//   ? console.log(10)
//   : a == 15
//   ? console.log(15)
//   : console.log(0);

// Nullish ??

// Nullish -> undefined va null ni false deb qabul qiladi undab boshqa barcha qiymatlarni true deb qabul qiladi. U || OR opertori bilan bir xil ishlaydi.

console.log(true || false); // true
console.log(true ?? false); // true
console.log(false || true); // true
console.log(false ?? true); // false
console.log(null || true); // true
console.log(false ?? "hi"); // false
console.log(null ?? "hi"); // hi
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null
