class Parsion {
  counter = 1;
  getName(params) {
    console.log(this.counter++);
  }
}

let per = new Parsion();

per.getName();
per.getName();
per.getName();
