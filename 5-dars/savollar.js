// dinamic- bitta function yozib hamma xoatlarga mos kelishiga aytiladi
// fanction decloration bu -global viribellarga uxshab qayrda yozsak usha yrda yurilib ketilaveradi virabelga uxshab bitta nom beriladi xalos
// function expression - 
// hoisting nima- function expression xamda o'zgarivchilarn codning eng yuqorisida dekler qib ketishga aytiladi;
 // functions - bularda o'zgarivchilar funksiyaning ichida bo'lsa inner viraybil deyiladi agar tshqarisida bo'lsa auter viraibel deyiladi;
 // virabil shodow nima - inner virabel bn auter virabel bir xil bo'lsa shu shodow virabel deyiladi;

 //defoult parametir - biror bir parameter bo'lsa chiqadi bo'lmasa chiqmaydi;

 // ... spret opertor yoyib tashalash yani o'zining gulli qovusini olib tashlaydi, parametrlarni qushib quyadi.

 // Object.assign - bu ham parametirlani bir biriga qushib quyadi.

 //structuredClone - bu qachonki bir obektga boshqa obektni tenglab quyganda ishlatiladi.

 // Garbage collection nima - ishlatib bo'lmaydigan malumorlarni musirga tashavoradi.
 

 //===================================================================================


 // 1.Object nima - object uzida malum bir tuplamdagi malumotlarni uz ichida saqlavchi nanpeimetiv dataypga ega bo'lgan malumot turi xisoblanadi.
 // Objectning ikki parametri mavjud - key va value xisoblanadi birinchi key yoziladi va undan keyin value yoziladi.

//  2. Object ichidan malumot chaqirib olish - buning ikkita usuli bor birinchisi console.log(user.name); ikkinchi usuli console.log(user["name"]) shu kurinshda yoziladi; bunda ikkinchi usul ikki bug'inli keylar ham bo'lganda shunda ishlatiladi masaln "full name": "wba" console.log(user["full name"]) birinchi usulda faqat full ni o'qiydi name o'qilmay qoladi va error beradi;

// 3. Dynamic key access - bu yo'qorida kursatilgan ikkinchi usul bu namfaqat ikki bo'g'inli balki istalgan xar qanday keyni shu usulda chaqirib olsak bo'ladi;

// 4. Obrivation key name - yani qisqartmalar bunda biz biror bir object yaratadigab bo'lsak tepada bitta uzgarivchi yaratib olinadi va object ichida chaqiriladi mislo ucun let name="Samar"; let obj={name: name} deb yozadigan bolsak tepadagi name uzgarivchisinig valuesi utib qoladi; yana buni soddalashtradihan bo'lsak let obj={name} deb yozadigan bo'lsak ham shu bir xil javob qaytaradi.

// 5. Fir in ? - for loop sekil edi for in ham sekilning bir turi xisoblanib objectda ishlatiladi; bizda misol uchun bir object yaratilgan bolsa unig ichidagi malumotlarni birma bir chaqirmaymizda for in dan foydalaniamiz bu esa eng optemall variant;
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
// assign bu qushish yani biriktrish manosini anglatadi objlarni bir biriga qushish
// Misol
// let obj1={word:"Hello"};
// let obj2={son:100}; 
// obj2=Object.assign(obj1,obj2) // word:"Hello", son:100;

// structuresClone() bu boshqa boshqa klonlarni memoriydan ajratadi    
// Misol:
// let a={x:10, y:20}; let c=a; console.log(c); // {x:10, y:20}
// bunga sabab a bilan c stekga birxi url manzillari bir xil;

// Garbage collection nima - ishlatib bo'lmaydigan malumorlarni musirga tashavoradi.