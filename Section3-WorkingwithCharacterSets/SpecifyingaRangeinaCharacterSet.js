// Match numbers in range ;
const rgx = /[1-7]/g

const rgx2 = /[a-e]/g

const txt = "There have been 4 - 5 times I have tried, but I will try it again."

console.log(rgx.test(txt))
console.log(txt.match(rgx))

// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
// A-F matches a single character in the range between A (index 65) and F (index 70) (case sensitive)
const rgx3 = /0x[0-9A-F][0-9A-F]/g

const txt3 = "Exception 0xAF89F"
console.log(txt3.match(rgx3))

// 1 matches the character 1 (case sensitive)
// 0-2 matches a single character in the range between 0 (index 48) and 2 (index 50) (case sensitive)
// 0 matches the character 0 with index 4810 (3016 or 608) literally (case sensitive)
const rgx4 = /[10-20]/g

const txt4 = "How do we capture the numbers 13-20?"
console.log(txt4.match(rgx4))
