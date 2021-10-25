// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
//  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

let txt = "Programming courses always starts with a hello world example."

let regex1 = /\s/
let regex2 = /world/

txt.split(regex1)

const str = "The quick brown fox jumps over the lazy dog."

const words = str.split(" ")
console.log(words[3])
// expected output: "fox"

const chars = str.split("")
console.log(chars[8])
// expected output: "k"

const strCopy = str.split()
console.log(strCopy)
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
