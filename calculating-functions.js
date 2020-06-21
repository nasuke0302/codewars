/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:
 *
 * seven(times(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 *
 * Requirements:
 * There must be a function for each number from 0 ("zero") to 9 ("nine")
 * There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function represents the right operand
 * Divison should be integer division. For example:
 *
 * eight(dividedBy(three())); // should return 2, not 2.666666...
 */

function numberFunc(arg, number) {
  if (!arg) return number;

  const operation = arg[0];
  const operand = arg[1];
  switch (operation) {
    case "plus":
      return number + operand;
    case "minus":
      return number - operand;
    case "times":
      return number * operand;
    default:
      return parseInt(number / operand);
  }
}

const zero = (arg) => numberFunc(arg, 0);
const one = (arg) => numberFunc(arg, 1);
const two = (arg) => numberFunc(arg, 2);
const three = (arg) => numberFunc(arg, 3);
const four = (arg) => numberFunc(arg, 4);
const five = (arg) => numberFunc(arg, 5);
const six = (arg) => numberFunc(arg, 6);
const seven = (arg) => numberFunc(arg, 7);
const eight = (arg) => numberFunc(arg, 8);
const nine = (arg) => numberFunc(arg, 9);

const plus = (operand) => ["plus", operand];
const minus = (operand) => ["minus", operand];
const times = (operand) => ["times", operand];
const dividedBy = (operand) => ["dividedBy", operand];

console.log(eight(dividedBy(three())));
