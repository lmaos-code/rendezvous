const reversedSquares = (n: number): boolean =>
  Math.sqrt(n) % 1 === 0 &&
  Math.sqrt(Number(n.toString().split("").reverse().join(""))) % 1 === 0;

console.log(reversedSquares(256), reversedSquares(9), reversedSquares(441));
