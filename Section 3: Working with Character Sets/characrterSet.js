// Match a single character present in the list below [ae]
const rgx = /gr[ae]y/g

const rgx2 = /[ft][ow]r/g

const rgx3 = /gr[ae]y[ .]/g

const txt =
  "Make the outline for the square gray and the fill for the circle grey."

console.log(rgx.test(txt))

console.log(txt.match(rgx))
console.log(txt.match(rgx2))
console.log(txt.match(rgx3))
