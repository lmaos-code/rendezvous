//This one needed a bit of an aha moment, but I got it done in the end.
//It's a bit of a cheat, as it does not fulfill my one-line constraint fully.
//I'm pretty proud about this solution.
//It does weird stuff with negative values, but since this is a "stock" it shouldn't matter
const maximumProfit = (prices: number[]): number =>
  prices.unshift(0) &&
  prices.reduce((acc, price, index) =>
    Math.max(acc, Math.max(...prices.slice(index + 1)) - price)
  );

console.log(maximumProfit([-11, 0, 0]));
