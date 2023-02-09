// lexical environment nima

// . [] Objectga bitta nuqta orqali emas [] qovus orqali ham kirsa bo'ladi bu daynamik usuli deyiladi
// delete nima - bu bizga kerak bo'lmagan biror bir key ni ucirish uchun ishlatialadi;

//===================================================================================

// 1.Object nima - key va voluelardan tshkel topga nanpeimetiv typega kirivchi  data type.
// Objectning ikki parametri mavjud - key va value xisoblanadi birinchi key yoziladi va undan keyin value yoziladi.

//  2. Object ichidan malumot chaqirib olish - buning ikkita usuli bor birinchisi console.log(user.name); ikkinchi usuli console.log(user["name"]) shu kurinshda yoziladi; bunda ikkinchi usul ikki bug'inli keylar ham bo'lganda shunda ishlatiladi masaln "full name": "wba" console.log(user["full name"]) birinchi usulda faqat full ni o'qiydi name o'qilmay qoladi va error beradi;

// 3. Dynamic key access - bu yo'qorida kursatilgan ikkinchi usul bu nafaqat ikki bo'g'inli balki istalgan xar qanday keyni shu usulda chaqirib olsak bo'ladi;

// 4. Obrivation key name - yani qisqartmalar bunda biz biror bir object yaratadigab bo'lsak tepada bitta uzgarivchi yaratib olinadi va object ichida chaqiriladi mislo ucun let name="Samar"; let obj={name: name} deb yozadigan bolsak tepadagi name uzgarivchisinig valuesi utib qoladi; yana buni soddalashtradihan bo'lsak let obj={name} deb yozadigan bo'lsak ham shu bir xil javob qaytaradi.

// 5. for in ? - for loop sekil edi for in ham sekilning bir turi xisoblanib objectda ishlatiladi; bizda misol uchun bir object yaratilgan bolsa unig ichidagi malumotlarni birma bir chaqirmaymizda for in dan foydalaniamiz bu esa eng optemall variant;
// misol

// let object={
//     name:"Samar",
//     age: 28,
//     year:1994
// }
// for(let i in object){
//     console.log(i); // key
//     console.log(object[i]); // value
//     console.log(`${i}: ${object[i]}`); // key: value;
// }
// shu ko'rinshga ishlariladi yani for in nima uchun kerak desak objni ichini birma bir yurib chiqishu uchun kerak bo'ladi;

// 6. Object.assign(), structuresClone() nima - yani refrins copelar;
// assign bu qushish yani biriktrish manosini anglatadi objlarni bir biriga qushish chiqaradi
// Misol
// let obj1={word:"Hello"};
// let obj2={son:100};
// obj2=Object.assign(obj1,obj2) // word:"Hello", son:100;

// StructuresClone() bu boshqa boshqa klonlarni memoriydan ajratadi; xar ikkala uzgarivchiga ham alohida alohida refrens beradi;
// Misol:
// let a={x:10, y:20}; let c=a; console.log(c); // {x:10, y:20}
// bunga sabab a bilan c stekga birxi url manzillari bir xil;

//  Garbage collection nima - ishlatib bo'lmaydigan malumorlarni musirga tashavoradi. Yani nanprimitevdan primetibga utgan prmitivning valuesi garbage collectionga borib tushadi;

// 7. Object methods - objectning ichida funksiyalar yozib uni chaqirsa ham bo'ladi va object ichida yana object yaratasa ham bo'ladi;

// 8. This, using in arrow function - this nima - dedigan bo'lsak perintning malumotlarini uzlashtrish yani oldin biz biror bir objectni boshqasiga chaqirmoqchi bo'lsak nuqta bilam chaqirar edik misol uchun obj.name der deik uning urniga this.name deb kersak ham bo'ladi bu ikkalasi ham bir xil ishlaydi lekin birinchi usulda obj1=obj2 desak bunibg qiymatini null deb quyadiagn bo'lsak bizga error beradi lekin obj ning urniga this quyadigan bo'lsak usha malumotni chiqazib beradi;
// Arrow functionning ichida this kevotfini ishlatish imkoni yo'q edi kelin obektning ichida ichma ich function larda ishlatsak bo'ladi yani bu qangay bo'ladi func(){return()=>cinsole.log(this.name, this.age)} bu qanday chaqiriladi obj.func()() yani nega bu bunday chaqirilayapdi desafunctionning ichida yana bitta function mavjug bo'lganligi uchun; ==++== functionning ichida return ishlatilsa shundagina arrow function ishlatish mukun.

// 9. Optional chaning nima ? - Objectning ichidagi biror bir malumot uzgarib error qaytib qolishi mumkun shularning oldini olish uchin ishlatiladi; yani suroq belgisi shu quyilgan joygacha oladi undan keyin undefined chiqarmaydi yani errorning oldini oladi;

// 10. Speade operator bu qanday ishlaydi ... - bu bizga ikkita obectni bir biriga qushib chiqaradi bu ham    object.assgin ga uxshab ishlaydi bu qovuslarni ochib tashlaydi bu nafaqat objectlarda balki arraylarda ham ko'p ishlatiladi;

// 11. Destructure operators in object nima - bu ichma ich ketgan objectlarning valuelarini olish uchun ishlatiladi yani nesit bo'lga objectlardan malumotlarni olish xisoblanadi;
