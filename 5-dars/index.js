// console.log("2 lik karra jadvali");
// for(i=3; i<=3;i++){
//     for(j=1;j<=10;j++){
//         console.log(`${i}x${j}=${i*j}`);
//     }
// }

// for(i=2;i>=2;i--){
//     for(j=10;j>=1;j--){
//         console.log(`${i}x${j}=${i*j}`);
//     }
// }


// for(i=2; i<=10; i++){
//     console.log(i);
// }
// let a=0
// while(a){
// console.log(a, "while");
// }
// do{
//     console.log(a,"do while");
// }while(a)

// ========== functions ====

// ========= function decloration ==== 

// function getAvr(){
//     console.log("Avdulloh welcome to Webbrian");
// }

// getAvr()

// ======== function Expression ====

// getAvr()

// function getAvr(){
//     console.log("Avdulloh welcome to Webbrian");
// }


// ======= Callback function =====

// const getAvr=(name)=>{
//     console.log(`${name} welcome to webbrain`);
// }
// getAvr("Rasul")


// ======= Arrow function ======


// let name= webbrain
// const getAvr= function (name, surname, age){
//     console.log(`Name: ${name} `);
//     console.log(`Surname: ${surname} `);
//     console.log(`Age: ${age} `);
//     console.log("==============");

// }

// getAvr("Rasul", "Qodirov","24")
// getAvr("Samariddin", "Urinov","28")
// getAvr("Tohir", "Xudoyberganov","34")
// getAvr("Yodgor", "Qurbonov","22")

// ======= virabel shodow =====

// let name = "Webbrain"
// const test = () =>
// {
//     let name = "Academy"
//     console.log(name);
// }

// test()
// console.log(name);

// ==== defoult parametir =========

const telegram=(name, surname)=>{
// if(surname)console.log(name, surname);
// else console.log(name);
// ||, ?? 
surname ?console.log(name, surname) : console.log(name);
// console.log(name, surname || "");


}

telegram("Webbrain", "Academy")