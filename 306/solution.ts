const missingLetters = (letters: string[]): (string | undefined)[] =>
  Array.from(zipAdjacent(letters), ([key, value]) =>
    value.charCodeAt(0) - key.charCodeAt(0) == 1
      ? undefined
      : Array.from(
          { length: value.charCodeAt(0) - key.charCodeAt(0) - 1 },
          (_, i) => String.fromCharCode(key.charCodeAt(0) + i + 1)
        )
  )
    .flat()
    .map((x) => x)
    .filter((x) => x != undefined);

// i am missing rusts windows(2) function
function* zipAdjacent<T>(iter: Iterable<T>): Generator<[T, T], void> {
  const iterator = iter[Symbol.iterator]();
  let prev = iterator.next();
  if (prev.done) return;
  let next = iterator.next();
  while (!next.done) {
    yield [prev.value, next.value];
    prev = next;
    next = iterator.next();
  }
}

console.log(missingLetters(["a", "z"]));
console.log(missingLetters(["a", "b", "c", "d", "f"]));
console.log(missingLetters(["O", "Q", "R", "S"]));
console.log(missingLetters(["t", "u", "v", "w", "x", "z"]));
console.log(missingLetters(["m", "o"]));
console.log(
  missingLetters([
    "a",
    "b",
    "c",
    "d",
    "e",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
  ])
);
