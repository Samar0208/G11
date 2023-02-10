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
