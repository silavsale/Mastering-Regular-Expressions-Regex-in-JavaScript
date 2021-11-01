// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Match a single character present in the list below [mtwfs]
// mtwfs matches a single character in the list mtwfs (case insensitive)
// Match a single character present in the list below [a-z]
// {1,4} matches the previous token between 1 and 4 times, as many times as possible, giving back as needed (greedy)
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// Match a single character present in the list below [nsir]
// nsir matches a single character in the list nsir (case insensitive)
// day matches the characters day literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
let regEx = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gim

let phoneNums = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

let days =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement."

newArray = []
newArray = days.replace(regEx, "Monday")
// newArray = phoneNums.map((day, index) => console.log(index + 1, day))
console.log(newArray)
