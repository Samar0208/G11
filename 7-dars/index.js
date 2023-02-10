// let name = { test: "webbrain", info: undefined };
// console.log(name?.info?.call);

// let obj = {
//   name: "Samar",
//   age: 25,
//   child: {
//     name: "Sahib",
//     age: 22,
//     child: {
//       name: "Rasul",
//       age: 21,
//     },
//   },
// };

// let sum = 0;
// while (1) {
//   if (obj) sum += obj.age;
//   else break;
//   obj = obj.child;
// }
// console.log(sum);

// console.log(1_000_000 + 500);

// console.log(1e500);

// console.log(0.1 + 0.2 === 0.3); // false

// console.log(0.2 + 0.2 === 0.4); // true

// console.log(Number(0.1 + 0.2).toFixed(1)); // 0.3

// let num = 0.1 + 0.2;
// console.log(Number(num.toFixed(1))); // +, Number

// let num = "0.1 + 0.2";
// console.log(parseInt(num)); // 0
// console.log(parseFloat(num)); // 0.1
// console.log(Number(num)); // NaN
// console.log(Number(eval(num))); // 0.30000000000000004

// console.log(1_0000 + 1); // 10001

// console.log(+"1_000" + 1); // NaN

// let num = 5;

// console.log(num.toString(2));

// let a = 100000;
// let b = "100_000";

// console.log(a);
// console.log(b);

// console.log(parseInt(a) + b);

// console.log(Number(a) + b);

// let a = 1.5;
// console.log(Math.floor(a)); // 1
// console.log(Math.ceil(a)); // 2
// console.log(Math.round(a)); // 2

// console.log(parseInt(Math.random() * 100));
// console.log(Math.pow(2, 4)); // 16

// console.log(Math.sign(12)); // 1

// let a = 10;

// console.log(a.toString(3), 2);

// function toBinary(decimal) {
//   return (decimal >>> 0).toString(2);
// }

// function count(son) {
//   son = toBinary(son);
//   console.log(son); // 11001
//   var bir = 0;
//   var nol = 0;
//   for (var i in son) {
//     if (son[i] == 1) {
//       bir += 1;
//     } else {
//       nol += 1;
//     }
//   }
//   console.log(`birlar soni ${bir}`); // birlar soni 3
//   console.log(`nollar soni ${nol}`); // nollar soni 2
// }
// count(25);

// function ayirma(a, b) {
//   if (a > b) {
//     return a - b;
//   } else {
//     return b - a;
//   }
// }

// console.log(ayirma(3, 5)); // 2

function rondom(min, max) {
  return Math.floor(Math.random() * (min + max + 1)) + min;
}

console.log(rondom(1, 50)); // 50

// let a = "10+20*2";
// console.log(eval(a));

// let a = 25;
// console.log(a.toString(2)); // 11001

// console.log(Object.is(2, "2"));

// savollar
//=====  Number ===

// toFixed()- bu uzining ichida bitta parametr qabul qiladi yani bnechta lementgacha aylansin, hamda yax litlab ham beradi, toFixed numberni aftamatik tarizda string qivoradi endi bini numberga alantrish ucun "+ yoki Number" deb yozib quyamzi;

// Numberda eval() nima - eval() bu numberda qnadaya amal bo'lsa ham to'g'ri ishlaydi;

// toString - Numberni stringa uzgartirib beradi;

// floor() nima- bu har doim bizga berilagan kasr sonlarni butun qismini olib beradi yani 1.6 bulsa 1 qaytaradi ParseIntga uxshaydi;

// ceil() nima - bu har doim sonlarni yuqorisini oladi yani 1.6 bo'lsa 2 qaytaradi berilgan qiymatga 1 quchib quyadi;

// round() nima - bu kasr sonlarni 1.2 bulsa 1 qaytaradi 1.5 va undan katta sonlarga 1 qushib qaytaradi;

// pow() nima - bu darjani chiqarib beradi misol uchun 2**4 ni pow(2,4) deb yozsak =16 chiqadi;

// sign() nima - ishora degan manoni bildradi bu sonning +, -, 0 ekanligini ifodalaydi: misol uchun console.log(Math.sign(12)) // 1 agar shuning oldida  menus bo'lsa -1  chiqaradi nul bo'sa nulni chiqaradi;

// eval() nima - bu string ishidagi sonlarni chiqarib beradi namber taypega utqazadi agar brorta harf aralashsa error qaytaradi;

// Object.is() - bu bizga true, false qaytaradi Misol uchun ("2","2") // true,( 2, 2) // true, ({}, {}) // false, (2, "2")// false;

// Math.abs() - bunga manfiy son kirtsa ham musbat uzgartrib quyadi;

// Math.trunc() - bu sonning butun qismini oladi katta ham qilmaydi kichchik ham qilamayd;

// =======================================

// 1. PI-3.14
// 2. abc() - absalut value, only musbat;
// 3. floor() - kasr qismini pastga qarab yaxlitlaydi;
// 4. ceil() - kasr qismini yuqoriga qarab yaxlitlaydi;
// 5. round() - yaxlitlaydi .5 => tepaga 5 d  an kichiki bo'lsa pastga;
// 6. trunc() - kasir qismini tushrib qoldiradi;
// 8. rondom() - 1~0 oroligidagi rondom raqam;
// 9. min(numbers) - sonlar orasidan minimumni topib beradi;
// 10. max(numbers) - sonlar orasidan maximumini topib beradi;
// 11. pow(num.pow) - darsjaga kupaytradi;

// home
//========= 1 =================
// 1. PI-3.14
// 2. abc() - absalut value, only musbat;
// 3. floor() - kasr qismini pastga qarab yaxlitlaydi;
// 4. ceil() - kasr qismini yuqoriga qarab yaxlitlaydi;
// 5. round() - yaxlitlaydi .5 => tepaga 5 han kichiki bo'lsa pastga;
// 6. trunc() - kasir qismini tushrib qoldiradi;
// 8. rondom() - 1~0 oroligidagi rondom raqam;
// 9. min(numbers) - sonlar orasidan minimumni topib beradi;
// 10. max(numbers) - sonlar orasidan maximumini topib beradi;
// 11. pow(num.pow) - darsjaga kupaytradi;

// ============= 2 ==============

// function ayirma(a, b) {
//     if (a > b) {
//       return a - b;
//     } else {
//       return b - a;
//     }
//   }

//   console.log(ayirma(3, 5)); // 2

// ============= 3 ==============

// function toBinary(decimal) {
//   return (decimal >>> 0).toString(2);
// }

// function count(son) {
//   son = toBinary(son);
//   console.log(son); // 11001
//   var bir = 0;
//   var nol = 0;
//   for (var i in son) {
//     if (son[i] == 1) {
//       bir += 1;
//     } else {
//       nol += 1;
//     }
//   }
//   console.log(`birlar soni ${bir}`); // birlar soni 3
//   console.log(`nollar soni ${nol}`); // nollar soni 2
// }
// count(25);

// ================ 4 =================

// function rondom(min, max) {
//   return Math.floor(Math.random() * (min + max + 1)) + min;
// }

// console.log(rondom(1, 50)); // 23
