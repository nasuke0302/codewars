// Find the first non-consecutive number

const firstNonConsecutive = (arr) => {
  const index = arr.findIndex((el, index) => el + 1 !== arr[index + 1]);
  return arr[index + 1];
};

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 9]));
