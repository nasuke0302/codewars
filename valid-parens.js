/**
 * Write a function called that takes a string of parentheses, 
 * and determines if the order of the parentheses is valid. 
 * The function should return true if the string is valid, and false if it's invalid.

 * Examples
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 * Constraints
 * 0 <= input.length <= 100
 */

function validParentheses(parens) {
  const parensArr = parens.split("");
  if (parensArr.length % 2 !== 0) return false;

  const firstHalf = parensArr.slice(0, parensArr.length / 2);
  const secondHalf = parensArr.slice(parensArr.length / 2);
  return firstHalf.length === secondHalf.length;
}
console.log(validParentheses("()()()((()))(("));
