// let str = "WebBr@in Ac@demy";
// let res = "";
// for (i of str) {
//   if (i == "@") {
//     res += "a";
//   } else {
//     res += i;
//   }
// }
// console.log(res);

let str = "Webbrain Academy";
let katta = 0;
let kichik = 0;

for (i of str) {
  if (i == " ") {
    continue;
  }
  if (i == i.toLowerCase()) kichik = kichik + 1;
  else katta = katta + 1;
}

console.log(`${katta} ta katta harf`, `${kichik} ta kichik harf`);
