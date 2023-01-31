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

// console.log(6 / "3"); // 2; typeof Number
// console.log("3" / 6); // 0.5; typeof Number
// javasctiptda bo'linish amallaridan biri string bo'lsa, bo'linishdi amalga oshirishdan oldin u bevosita raqanga aylantiriladi.

// 5-masala

// console.log("2" * "3"); // 6
// javascriptda agar kupaytirish amalining ikkala tomoni ham string bo'lsa ular kupaytrish amalga oshirishdan oldin raqamga aylantriladi.

// 6-masala

// console.log(4 + 5 + "px"); // 9px typeof string
// js da qushish amali chapdan ama;ga oshiriladi 4+5=9 natejani chiqaradida va oxirida string tyoe borligi uchun stringga aylantrib natsjada 9px xosil bo'ladi.

// 7-masala

// console.log("$" + 4 + 5); // $45 typeof string
// console.log(4 + "$" + 5); // 4$5 typeof string
// js da chapdan boshlab o'qiganligi uchun boshidagi string bo'lganligi uchun hammasini stringa olib quyayapdi

// 8-masala

// console.log("4" - 2); // 2 typeof Number
// js da ayrish amaliga oshirilayotganda ikkala qatordan biri string bo'lsa ham uni oldin namberga aylantrib oladi va typeof Number beriladi. Agar  console.log("a" - 2); // NaN chiqaradi chunki bu faqat sonlarni Numberga aylantradi.

// 9-masala

// console.log("4px" - 2); // NaN
// JS da stringni numberga aylantrib bo'lmas bevosita NaN chiqaradi chunki bu faqat sonlarni Numberga aylantradi.

// 10-masala

// console.log("-9" + 5); // -95 typeof  String
// JS da qushish amali chapdan amalga oshrilayotganligi uchun ikkalasi ham stringa aylanib qolayapdi shunig uchun -9 ning orqasidan5 sonini qushib yozib quyayapdi

// 11-masla

// console.log("-9" - 5); // -14 typeof number
// JS da ayrish amali bajarilayotganda ikki tyrdagi data type bo'lsa ham ularni number kurinishiga ugradida natejada qushib chiqaradi.

// 12-masala

// console.log(null + 1); // 1 typeof Number

// JS da raqamli kontekstda ishlagabidek null kurib chiqiladi null ni 0 ga teg qilib olinadi va natejada null+1=1; chiqadi.

// 13-masala

// console.log(undefined + 1); // NaN
// JS da undefined raqam emas va uni raqamli contextda ishlatib bo'lmaydi. Arfimetik amalda ishlatsa "undefined" "NaN" qaytaradi

// 14-masala

// console.log("\t \n" - 2); // -2 typeof Number

// JS da stringni numberga aylantirib bo'lmaydi stringni numberga aylantrishga xarakat qiladi lekin imkoni bo'lmaganligiz sabali masaladagi oxirgi sonni qaytaradi String esa NaN ga aylanadi

// ======================= 5-Comparisons ===========

// 1-masala

// console.log(5 < 4); // true
//  JavaScript sonlarning katta kichikligini tekshiradi  >< bu ishoralarga qarab javob chiqaradi. Misol uchun console.log(5 < 4); nateja false 5 dan 4 kattami deb surayapdi false qaytarayapdi yani yo'q katta emas deyapdi.

// 2-masala

// console.log("apple" > "pineapple"); // false
// JS da xar bir belgi taqqoslanadi chunki hariflarnig ham tartib taqami bor yani kodlari shunga qarab katta kichikligi aniqlanadi

// 3-masala

// console.log("2" > "12"); // true
//  JS da taqqoskash belgilar bo'yicha amalga oshrganda ikkala stringning birinchi belgilari solishtrib ko'riladi shunda birinchi belgi ikkinchisidan kattaroq bolsa shunga qarab nateja chiqaradi yani true yoki false

// 4-masala

// console.log(undefined == null); // true
// JS da "undefined" va "null" ikkalsida ham qiymati yoqligi sababli  tenglik opratiri bilan solishtrilganda ularni teng deb hisoblaydi.

// 5-masala

// console.log(undefined === null); // false
// JS da "undefined" va "null" bularni qat'iy tenglik opratiri bilan tekshirganda ularning data type ni ham tekshiradi data tayplar xar hil bo'lganligi sababli false qaytaradi. "undefined typeof undefined", "null typeof Object"

// 6-masala

// console.log(null == "\n0\n"); // false
// JS da "==" bu tenglik yuqorida berilgan masalaning qiymatini tekshuradi bu qiymatlar xar hil bo'lganligi uchun false qaytaradi.

// 7-masala
// console.log(null === +"\n0\n"); // false
// Bu masalada qat'iy tenglik operatiri bilan tekshurilganda berilan qiymatlarning qiymatini va type ni tekshuradi bunda qiymati bir xil bo'lsada type ikki xil bo'sa ham fals qaytaradi.
