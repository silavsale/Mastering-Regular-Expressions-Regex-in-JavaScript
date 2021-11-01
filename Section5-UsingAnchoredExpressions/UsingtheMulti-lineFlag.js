// \. matches the character . with index 4610 (2E16 or 568) literally (case insensitive)
// $ asserts position at the end of a line
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
let regEx = /\.$/gim

const txt =
  "The asdfsdf the. it allow to be lazy. Put a badfe the.The problem is the the regex also matches in cases where it should not match.If you are new to regular expressions, some of these cases may not be so obvious as first."
