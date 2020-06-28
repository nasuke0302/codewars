//www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

const index = (array, n) => {
  console.log(array[n]);
  return array[n] ? array[n] ** n : -1;
};

console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9));
