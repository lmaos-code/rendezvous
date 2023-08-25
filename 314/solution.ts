import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessingGame = (n: number, count: number, result: string): void =>
  rl.question(
    result != "" ? result + "\n" : "" + "Guess a number: ",
    (answer: string) =>
      parseInt(answer) === n
        ? (() => {
            console.log("Correct! You guessed it in " + (count + 1) + " tries");
            rl.close();
          })()
        : parseInt(answer) > n
        ? guessingGame(n, count + 1, "too high")
        : guessingGame(n, count + 1, "too low")
  );

guessingGame(Math.floor(Math.random() * 100), 0, "");
