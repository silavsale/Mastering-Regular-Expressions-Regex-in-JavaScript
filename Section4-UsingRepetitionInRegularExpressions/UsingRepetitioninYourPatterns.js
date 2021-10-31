// + Match one or more occurences.
// ? Match zero or one occurences.
// * Match zero or more occurences.

const txt =
  "SYhe sells seashells on a seashore. The shells she sells are seashells, I'm \n sure."

// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
let regEx = /[A-Z]+/g


let regEx2 = /s[a-z]?/g

console.log(txt.match(regEx))
console.log(txt.match(regEx2))
