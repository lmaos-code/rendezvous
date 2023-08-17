const faultyKeeb = (input: string): string =>
  Array.from(input).reduce(
    (acc, curr) =>
      new RegExp(/[aeiouy]/).test(curr.toLocaleLowerCase())
        ? acc.split("").reverse().join("")
        : acc + curr.toLocaleLowerCase(),
    ""
  );

console.log(faultyKeeb("i love one-liners"));
console.log(faultyKeeb("hello world"));
