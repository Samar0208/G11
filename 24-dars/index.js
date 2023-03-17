function* get(a) {
  console.log(a);

  let id = yield 1;
  let d = yield 2 + id;
  yield 3 + d;
  yield 4;
}

const gen = get(12);

console.log(gen.next());
console.log(gen.next(3));
console.log(gen.next(5));
