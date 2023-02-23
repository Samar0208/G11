// ============ Array ============

// Object.keys() - bu bizga keylarini chiqarib beradi;
// Object.values() - bu bizga valuelarni chiqarib beradi;
// Object.entries() - bu bizga key va valuedan tashkil topgan nestit arrayni chiqarib beradi,  yani har bir key va valueni alohida alohida arrayga solib chiqaradi;
// Object.fromEntries() - nestit arraydan objekt yasab beradi;
// Array(4) - bu bizga 4 ta bush array elimintini yasab beradi [ <4 empty items> ]
// concat() - bu bizga arraylarni qushib chiqarib beradi;
// toString() - bu bizga numberni stringa o'zgartirib  beradi;
// of - bu malumotning valuesini chiqaradi;
// in - bu malumotning indexsini chiqaradi;
// push() - bu malumotning oxiridan qushib quyadi;
// unshift() - bu malumotning boshidan qushadi;
// shift() - bu malumotning boshidan bittasini uchirivoradi;
// pop() - bu malumaotning oxiridan bittasini uchiradi
// splice()- slice() - bular arrayning malumotini kesib olish uchun ishlatiladi;
// slice() - bunda biz nechinchi indexdan nechinchi malumotni kesib olamiz shuni yozamiz;
// splice() - bu +- qiymatini qabul qiladi va ikkita farqi ham bor ikkinchi qismi conut nechta kesib olishi va asli arrayni ham o'zgartradi;
// indexOf() - bu malumot nechinchi indexda joylashganini ko'rsatadi;
// includes() - bu true yoki false qiymat qaytaradi shu malumaot bor yoki yo'qligini
// join() -  bu malumotlarni join qilsak stringa o'zgartirib beradi, agar xar bir malumotning orasiga (, * "") shunaqa kurinshda yozsak orasiqa shu belgilarni quyib beradi;

// callback() - bu callback()=>{}  finction deganda boshqa bir functionning parametrida keladi: value, index.
// find() - malumotlarning itemini va indexni chiqarib beradi shu malumotni topdimi qidirishni tuxtatadi;
// filter() - bu callback functionning true yoki false b'lishini kutadi bu bizga malumotlarni topishda yordam beradi. Filter bizning shartimizga mos kelganini qoldirib qolganini chiqarib yuboradi;
// findIndex() - bu malumotning turgan indexsini chiqarib beradi;
// sort() - bu malumotlarning joylashish o'rnini uzgartiradi;
// localeCompare() - bu malumotlarini to'g'ri sarterofka qib beradi yani string bo'lganlarini;
// every() - bu collback function qabul qiladi unigi ichida true yoki false qaytaradi bunig ichida birorta false bo'sa hammasini false qilib qaytaradi;
// some() - bu ham collback function qaytaradi bunda bittasi true bo'lsa ham hammasini true qilib qaytaradi
// forEach - bunda returin degan tusuncha yo'q bu faqat malumot ustida amal bajaradi;
// map() - bu yangi array qaytaradi returinga nima yozsak shuni qaytaradi;
// fill() - bu tuldirmoq degani malumotlarinig boshqa bir malumotga o'zgartirib quyadi;
// reduce() - bu qiymat qaytaradi;
