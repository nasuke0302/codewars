String.prototype.toAlternatingCase = function () {
  const arr = this.split("");
  return arr
    .map((char) =>
      char === char.toLocaleUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase()
    )
    .join("");
};

console.log("ASDasdASD".toAlternatingCase());
