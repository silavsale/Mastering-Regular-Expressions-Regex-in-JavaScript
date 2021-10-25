// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// If pattern is a string, only the first occurrence will be replaced.

let txt = "Programming courses always starts with a hello world example hello."

let regex1 = /hello/
let regex2 = /world/

txt.replace(regex1, "hi")

console.log(txt.replace("hello", "coffe"))
