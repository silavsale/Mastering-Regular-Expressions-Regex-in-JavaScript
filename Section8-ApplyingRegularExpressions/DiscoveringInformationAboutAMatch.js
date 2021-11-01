let phrase =
  "First number: 32, and a second number 100. Here is the last number 15."
let matchStart, matchLength, match

let result = /\d+/.exec(phrase)
console.log(result)
if (result) {
  matchStart = result.index
  matchLength = result[0].length
  matches = result[0]
}
