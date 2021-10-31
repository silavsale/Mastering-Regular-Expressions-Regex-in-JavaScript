// \w matches any word character (equivalent to [a-zA-Z0-9_])
// {3,5} matches the previous token between 3 and 5 times, as many times as possible, giving back as needed (greedy)
const rgx = /\w{3,5}/g

// \w matches any word character (equivalent to [a-zA-Z0-9_])
// {3,} matches the previous token between 3 and unlimited times, as many times as possible, giving back as needed (greedy)
const rgx2 = /\w{3,}/g

const txt = "My telephone number is follows: 801-555-6789"

rgx.test(txt)

console.log(txt.match(rgx))

// {6} matches the previous token exactly 6 times
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
// A-F matches a single character in the range between A (index 65) and F (index 70) (case insensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
const rgx3 = /#[0-9A-F]{6}/gim

const txt3 = "#ff0000 #C0C0C0"

console.log(txt3.match(rgx3))

// \d matches a digit (equivalent to [0-9])
// {3} matches the previous token exactly 3 times
// - matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
// \d matches a digit (equivalent to [0-9])
// - matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
// \d matches a digit (equivalent to [0-9])
// {4} matches the previous token exactly 4 times
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
const rgx4 = /\d{3}-\d{2}-\d{4}/gm

const txt4 = "523-55-4322"

console.log(txt4.match(rgx4))
