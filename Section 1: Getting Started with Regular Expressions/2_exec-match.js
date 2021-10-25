// The exec() method executes a search for a match in a specified string. Returns a result array, or null.

// JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g. /foo/g or /foo/y).
//  They store a lastIndex from the previous match.
// Using this internally, exec() can be used to iterate over multiple matches in a string of text (with capture groups),
//  as opposed to getting just the matching strings with String.prototype.match().
// A newer function has been proposed to simplify matching multiple parts of a string (with capture groups): String.prototype.matchAll().
// If you are executing a match to find true or false, use RegExp.prototype.test() method instead.
// If you are executing a match to find its index position in the string, use String.prototype.search() method instead.

// The match() method retrieves the result of matching a string against a regular expression.

let txt = "Programming courses always starts with a hello world example. hello"

let regex1 = /hello/
let regex2 = /world/

console.log(regex1.exec(txt))
console.log(regex2.exec(txt))

txt.match(regex1)

// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.

const regexp = /t(e)(st(\d?))/g
const str = "test1test2"

const array = [...str.matchAll(regexp)]

console.log(array[0])
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1])
// expected output: Array ["test2", "e", "st2", "2"]
