function missingLetters(letters: string[]){
	

	let missing: string[] = []
	for(let i = 1; i < letters.length - 1; i++){
		if(letters[i].charCodeAt(0) + 1 !== letters[i+1].charCodeAt(0)){
			for( let j = 1; j < letters[i+1].charCodeAt(0)-letters[i].charCodeAt(0); j++){
			missing.push(String.fromCharCode(letters[i].charCodeAt(0) + j))
			}
		}
	}
	return missing
}

// i am missing rusts windows(2) function
function* zipAdjacent<T>(iter:Iterable<T>): Generator<[T,T], void> {
	const iterator = iter[Symbol.iterator]()
	let prev = iterator.next()
	if(prev.done) return;
	let next = iterator.next()
	while(!next.done){
		yield [prev.value, next.value]
		prev = next
		next = iterator.next()
	}

}

console.log(missingLetters(['a','b','c','d','f']))
console.log(missingLetters(['O','Q','R','S']))
console.log(missingLetters(['t','u','v','w','x','z']))
console.log(missingLetters(['m','o']))
console.log(missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']))

