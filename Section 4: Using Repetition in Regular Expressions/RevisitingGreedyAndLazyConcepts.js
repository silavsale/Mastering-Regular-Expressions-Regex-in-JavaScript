// \d matches a digit (equivalent to [0-9])
// {2} matches the previous token exactly 2 times
// - matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
// \d matches a digit (equivalent to [0-9])
// {4,6} matches the previous token between 4 and 6 times, as many times as possible, giving back as needed (greedy)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
const rgx = /\d{2}-\d{4,6}/gm

// \d matches a digit (equivalent to [0-9])
// {2} matches the previous token exactly 2 times
// - matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
// \d matches a digit (equivalent to [0-9])
// {4,6}? matches the previous token between 4 and 6 times, as few times as possible, expanding as needed (lazy)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
const rgx2 = /\d{2}-\d{4,6}?/gm

const txt = "32-6679, 45-846545, 54-232 "

rgx.test(txt)

console.log(txt.match(rgx))
console.log(txt.match(rgx2))
