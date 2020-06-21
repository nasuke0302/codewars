const vowelsValues = { a: 1, e: 2, i: 3, o: 4, u: 5 };
const numberVowels = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };

function encode(string) {
  return string
    .split("")
    .map((char) => vowelsValues[char] || char)
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((char) => numberVowels[char] || char)
    .join("");
}
console.log(encode('hello'));