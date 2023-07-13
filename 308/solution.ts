const strings = [
  "This",
  "is",
  "a",
  "justificationjustification",
  "example",
  "of",
  "text",
];
const maxWidth = 16;

const justifyText = (words: string[], maxWidth: number): string => {
  let result: string = "";
  let currentLine: string[] = [];
  let currentLineLength = 0;

  for (const word of words) {
    if (currentLineLength + currentLine.length + word.length > maxWidth) {
      result += justifyLine(currentLine, maxWidth, currentLineLength) + "\n";
      currentLine = [];
      currentLineLength = 0;
    }
    currentLine.push(word);
    currentLineLength += word.length;
  }

  if (currentLine.length > 0) {
    result += justifyLine(currentLine, maxWidth, currentLineLength);
  }

  return result;
};

const justifyLine = (
  words: string[],
  maxWidth: number,
  currentLineLength: number
): string => {
  const spaces = words.length - 1;
  const totalSpaces = maxWidth - currentLineLength;
  const spaceWidth = Math.floor(totalSpaces / spaces);
  const extraSpaces = totalSpaces - spaceWidth * spaces;

  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    const spacesToApply = spaceWidth + (i <= extraSpaces ? 1 : 0);
    result += " ".repeat(spacesToApply) + words[i];
  }
  if (result.length > maxWidth) {
    result = result.substring(0, maxWidth) + "\n" + result.substring(maxWidth);
    return result + " ".repeat(maxWidth - result.substring(maxWidth).length);
  }

  return result + " ".repeat(maxWidth - result.length);
};

console.log(justifyText(strings, maxWidth));
