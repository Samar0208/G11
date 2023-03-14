// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.name);

class Rabbit extends Object {
  constructor(name) {
    super(name);
  }
}

let rabbit = new Rabbit("Rab");
console.log(rabbit.hasOwnProperty("name"));
