// Flags
// Regular expressions may have flags that affect the search.

// There are only 6 of them in JavaScript:

// i
// With this flag the search is case-insensitive: no difference between A and a (see the example below).
// g
// With this flag the search looks for all matches, without it – only the first match is returned.
// m
// Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").
// s
// Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).
// u
// Enables full Unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}.
// y
// “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)

let txt = "Programming courses always starts with a hello world example."

let regex1 = /\s/g
let regex2 = /p/gi

txt.replace(regex1, "-")

txt.match(regex2)

// every new call of exec() method will return next occurrence of pattern in code
regex1.exec(txt)
regex1.exec(txt)
regex1.exec(txt)
