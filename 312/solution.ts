const checkLuhn = (digits: number): boolean =>
  Array.from(String(digits), Number).reduceRight(
    (acc, digit, index) =>
      index % 2 === 0
        ? acc + digit
        : acc + (digit * 2 > 9 ? digit * 2 - 9 : digit * 2),
    0
  ) %
    10 ===
  0;

const checkCardType = (digits: number): string =>
  digits.toString().length === 15 &&
  (digits.toString().startsWith("34") || digits.toString().startsWith("37"))
    ? "AMEX"
    : digits.toString().length === 16 &&
      parseInt(String(digits).substring(0, 2)) >= 51 &&
      parseInt(String(digits).substring(0, 2)) <= 55
    ? "MasterCard"
    : (digits.toString().length === 13 || digits.toString().length === 16) &&
      digits.toString().startsWith("4")
    ? "VISA"
    : "Unknown";

const checkLuhnWithCards = (
  digits: number
): { valid: boolean; vendor: string } =>
  JSON.parse(
    JSON.stringify({ valid: checkLuhn(digits), vendor: checkCardType(digits) })
  );

console.log(checkLuhn(5555555555554444));
console.log(checkLuhnWithCards(5555555555554444));
