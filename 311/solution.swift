func isAnagram(one:String,two:String) -> Bool{
	return Array(one).sorted() == Array(two).sorted()
}

print(isAnagram(one:"Barbie",two:"Oppenheimer"))
print(isAnagram(one:"race",two:"care"))