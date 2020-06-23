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

/**
 * )(()))
 * )())
 * ))
 *
 */

let lastStr = "";
let count = 0;
const validParentheses = parens => {
  const parensArr = parens.split("()");
  const joinedArr = parensArr.join("");

  switch (joinedArr.length) {
    case 0:
      return true;
    case 1:
      return false;
    default:
      if (count >= 2 && lastStr === joinedArr) {
        return false;
      }
      count++;
      lastStr = joinedArr;
      return validParentheses(joinedArr);
  }
};

console.log(validParentheses("(())((()())())"));
