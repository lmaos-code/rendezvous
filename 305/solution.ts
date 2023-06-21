function depthJSON(json: any): number {
	return (typeof json != 'object' && json != null) ? 0 : 1 + Math.max(0, ...Object.values(json).map((val) => depthJSON(val) as number));
}


console.log(depthJSON({ "a": 1 }))
// 1
console.log(depthJSON([1, 2, 3, 4, 5]))
// 1
console.log(depthJSON([{ "a": [] }, ["abc"]]))
// 3
console.log(depthJSON("hi"))
// 0 
