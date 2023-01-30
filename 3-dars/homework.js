// =============== Homework ======

// ====== 2 Prefix and Postfix ====

// let a=1, b=1
// let c = ++a;
// let d = b++;
// console.log(c); // 2
// console.log(d); // 1

// Yuqorida ko'rsatilgan 2ta masalaga tarif;
// 1 - masala let a = 1 teng deb olinayapdi  c ni esa a ga tenglab olayapdi c = a a ning qiymatini ++a orqali bittaga oshirayapdi natejada 2 chiqayapdi.
// 2 - masala let b = 1 tebg deb olinayapdi d ni esa b ga tenglab olinaypdi d=b b ning qiymatni
// b++ orqali oshirgani bilan natsja 1 chiqaveradi chunki ++ b ning orqasida keltrilgan b dan keying qiymat biriktrsa shunga qushib xisoblaydi. Misol uchun let b = 1; let c = b++; let a = b; console.log(a); // nateja 2

//================== 2 Assinment result ======

// let a = 2
// let x = 1 + (a *= 2)
// console.log(a); // 5

// Bu 3- vazifada bizga berilgan masala let a=2; deb berilgan keyin esa let x=1+(a*=2); bunda qavslar ichidagi amal birinchi bajarilishi natejasida a ninf qiymat 2 ga teng bo'lganligi sababli 2*2=4 bo'layapdi keyin qavsdan tashqaridagi amal bajariladi shu chiqqan natejaga 1 ni qushayapdi 4+1=5 natejada 5 kelib chiqayapdi.

// ====================== 4-Type Conversion =========
//  1-masala
// console.log("" + 1 + 0); // 10
// yuqorida kursatilhan masalada String ichida 10 chiqishining sababi boshida kelayotgan amal string 1ga nulni qushib quydi natsjada 10 soni chiqdi misol uchun console.log("" + 1 + "s"); bulganida 1s chiqqan bo'lardi.

// 2-masala

// console.log("" - 1 + 0  ); // -1
// bu masalada esa -1 Number typeda chiqdi bunga sabab birinchi String keldi undan keyin - amali kelganligi sabab -1 chiqarayapdi 0 sini qiymatga ega bo'lmagankigi uchun -1 chiqayapdi agar nul soninig o'rnida 3 soni bo'lganda nateja 2 chiqan bo'lardi chunki 1 ayrib xisoblayapdi.

// 3-masala

// console.log(true+false); // 1
// bunda 1 nateja chiqishining sababi true = 1 ga ten false = 0 ga teng 

// 4-masala

console.log( 6 / "3" );