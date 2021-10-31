// ^ - Matches anything NOT in the character class
const rgx = /0x[^0-9A-F][^0-9A-F]/g

const txt = "Exception 0xZZ89F"

console.log(txt.match(rgx))
