/**
 * SpeedCode #2 - Array Madness
 * Objective
 * Given two integer arrays a, b, both of length >= 1,
 * create a program that returns true if the sum of the squares of each element in a
 * is strictly greater than the sum of the cubes of each element in b.
 */

const arrayMadness = (a, b) => {
  const resultA = a.reduce((acc, curr) => acc + curr ** 2, 0);
  const resultB = b.reduce((acc, curr) => acc + curr ** 3, 0);
  return resultA >= resultB;
};

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
