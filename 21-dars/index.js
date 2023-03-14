// class Parsion {
//   counter = 1;
//   getName(params) {
//     console.log(this.counter++);
//   }
// }

// let per = new Parsion();

// per.getName();
// per.getName();
// per.getName();

// class Persion{
//   constructor(props){
//     this.name=props
//   }
//   calc(...prames){
//     if(this.name==="plus"){

//       console.log(prames.reduce((cur, value) => cur + value,0));
//     }else if(this.name==="minus"){
//       console.log(prames.reduce((cur, value) => cur - value,0));

//     }
//   }
// }
// let plus=new Persion("plus")
// let minus=new Persion("minus")

// plus.calc(1,2,3,3,4,3)
// minus.calc(1,2,3,4,3)

// class Persion{
//   get(){
//     console.log("Parent Persion");
//   }
// }

// class Animal extends Persion{
//   info(){
//     console.log("child animal");
//   }
// }

// let anim=new Animal()
// anim.get()

class Persion{
    static counter=1
    static getTime(){
      console.log(this.counter++);
    }
    getT(){
      console.log(Persion.counter++);
    }
}

let t1=new Persion()
let t2= new Persion()


t2.getT()
Persion.getTime
Persion.getTime
Persion.getTime
t1.getT()
t2.getT()