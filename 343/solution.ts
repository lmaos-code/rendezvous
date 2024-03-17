const maxGap = (n: number[]): number => {
	return n.length > 1 ? n.sort((a, b) => a - b).reduce((acc, curr, i, arr) =>
		Math.max(acc, curr - arr[i - 1])
	) : 0;
}

console.log(maxGap([13, 10, 2, 9, 5]))