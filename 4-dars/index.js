//======= switch =========

// let weather = "bulut";
// weather = "csac";
// switch (weather) {
//   case "bulut":
//     console.log("havo bulut");
//     break;
//   case "yomgir":
//     console.log("havo yomgir");
//     break;
//   case "quyosh":
//     console.log("havo quyosh");
//     break;
//   default:
//     console.log("bizda bunday malumot yo'q");
// }

//   ======== for =======

// let i = 10;

// for (i; i <= 10; i++) {
//   console.log(i);            ++
// }

// for (i; i >= 1; --i) {
//   console.log(i);           --
// }

// for (i; i >= 1; i = i - 2) {
//   console.log(i);
// }

// let i = 1;

// for (i; i <= 10; i++) {
//   console.log(i, i % 2);
// }

// ============= 1-usul toq va juft sonlarni aniqlash ================

// for (i; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "juft son");
//   } else {
//     console.log(i, "toq son");
//   }
// }

// ============= 2-usul toq va juft sonlarni aniqlash ================

// for (i; i <= 10; i++) {
//   if (i % 2) {
//     console.log(i, "toq son");
//   } else {
//     console.log(i, "juft son");
//   }
// }

// ========= while ==========

// let i = 1;

// while (i <= 3) {
//   alert(i);
//   i++;
// }

// ================== do while ==================

// let i = 0;

// while (i) {
//   console.log(i, "while");
// }

// do {
//   console.log(i, "do while");
// } while (i);

// for (var i = 1; i <= 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }

// console.log("ikkilik karra jadvali");
// for (i = 4; i <= 4; i++) {
//   for (j = 5; j < 10; j++) {
//     console.log(`${i}x${j}=${i * j}`);
//   }
// }

for (i = 2; i >= 2; --i) {
  for (j = 10; j > 1; --j) {
    console.log(`${i}x${j}=${i * j}`);
  }
}
