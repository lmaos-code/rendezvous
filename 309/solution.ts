const explodeString = (str: string): string[] =>
  str == ""
    ? []
    : str
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, cur) =>
          cur == acc[acc.length - 1] ? (acc += cur) : (acc += "?ß" + cur)
        )
        //seperator contains two chars, so it will never mess up the result
        .split("?ß")
        .filter((elem) => elem != " ");
// Doing it like this is extremely stupid, but it is an "easy" way to keep it on a single line.

console.log(explodeString("Ahh, abracadabra!"));
console.log(explodeString(" "));
