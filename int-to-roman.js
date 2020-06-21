/* Create a function taking a positive integer as its parameter and returning
 a string containing the Roman Numeral representation of that integer. */

const keys = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];

const romanize = (num) => {
  let digits = String(+num).split(""),
    roman = "",
    i = 3;
  while (i--) {
    roman = (keys[+digits.pop() + i * 10] || "") + roman;
  }
  return Array(+digits.join("") + 1).join("M") + roman;
};

console.log(romanize(1990));