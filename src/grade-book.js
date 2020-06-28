//www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

const getGrade = (s1, s2, s3) => {
  const avg = (s1 + s2 + s3) / 3;
  return avg < 90
    ? avg < 80
      ? avg < 70
        ? avg < 60
          ? "F"
          : "D"
        : "C"
      : "B"
    : "A";
};

console.log(getGrade(70, 70, 100));
