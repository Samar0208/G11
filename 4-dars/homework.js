// ========= 1-homework ======

// let browser = "Opera";

// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okey ew support these browsers too");
//     break;
//   default:
//     console.log("We hope that this pags looks ok!");
// }

// birinchi vasifamizda birnchi codimizda "You've got the Edge" chiqadi;
// ikkinchi aylanishida "Okey ew support these browsers too" chiqadi chunki xar bir  case dan keyin console.log va break bo'ishi kerak;
// oxirgi aylanishida default berilgan uzgarivchiga xech qanaqa qiymat "berilmasa We hope that this pags looks ok!" chiqiadi chunki xech qanaqa qiymat yo'q;

// =========== homework ======

// let a = +prompt("a?", "");

// if (a == 0) {
//   alert(0); //0
// }
// if (a == 1) {
//   alert(1); // 1
// }
// if (a == 2 || a == 3) {
//   alert("2,3"); // 2,3
// } else {
//   alert("bunaqa son yo'q");
// }

// bu masalda promtga ixtyoriy son kirtamiz bizda bor sonlar bo'lsa shuni qaytaradi yo'q bo'lsa else/dagi bunaqa son yo'q deb chiqaradi;

// ================= homework ==============

// 1.

// let i = 3;
// while (i) {
//   console.log(i--); // 3, 2, 1
// }

// bu masalada i=3 berilgan i-- bu 3 sonida 1 sinini ayrib chiqan javobni chiqarayapdi;

//2.

// let i = 0;
// while (++i < 5) console.log(i); //1, 2, 3, 4

// bu maslada esa i<5  dan kichickmi deb surayapdi shuna true bo'lsa 5 dan kichiki sonlarni chiqaradi  5 dan 5 kattami deb solishtrganda false chiqadi shunda 5 soni va undan aktta sonlar chiqmaydi;

// let i = 0;

// while (i++ < 5) console.log(i); //1,2,3,4,5

// bu masalada esa tepadagi masala kabi ishlanadida bunda 5 ni ham chiqardi;

// 3.

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}`);   // 0 number,  1 number,  3 number
// }
