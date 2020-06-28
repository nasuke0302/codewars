//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

const tripleTrouble = (one, two, three) => {
  let d = "";
  for (let i = 0; i < one.length; i++) {
    d += `${one[i]}${two[i]}${three[i]}`;
  }
  return d;
};

const a = tripleTrouble("aa", "bb", "cc");
console.log(a);
