[
  "Adam",
  "has",
  "a",
  "dog",
  "The",
  "name",
  "of",
  "of",
  "the",
  "is",
  "also",
].forEach(function (name, n) {
  this[name] = (n) => (n ? `${name} ${n}` : `${name}.`);
});

console.log(Adam(has(a(dog()))));
