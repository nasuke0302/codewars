/**
 * Find the last k digits of the number nn. It is guaranteed that the length of number nn is not less than k.
 * Example
 * For n = 5, k = 3, the result should be "125"
 *
 * 5^5 = 3125, last 3 digits is "125"
 *
 * Input / Output
 * [input] integer n
 *
 * 1 ≤ N ≤ 10^9
 *
 * [input] integer k
 *
 * 1 ≤ k ≤ 9
 *
 * [output] a string
 *
 * string of length k ---> last k digits of n^n
 */
Number.prototype.toFixedSpecial = function (n) {
  var str = this.toFixed(n);
  if (str.indexOf("e+") === -1) return str;

  // if number is in scientific notation, pick (b)ase and (p)ower
  str = str
    .replace(".", "")
    .split("e+")
    .reduce(function (p, b) {
      return p + Array(b - p.length + 2).join(0);
    });

  if (n > 0) str += "." + Array(n + 1).join(0);

  return str;
};

function n2n(n, k) {
  const pow = (n ** n).toFixedSpecial(10);
  console.log(pow);
  return pow.substring(pow.length - k, pow.length);
}

console.log(n2n(999, 9));
