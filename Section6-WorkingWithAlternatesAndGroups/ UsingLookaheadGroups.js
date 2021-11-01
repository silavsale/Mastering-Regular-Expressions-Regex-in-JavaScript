// \w matches any word character (equivalent to [a-zA-Z0-9_])
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// Positive Lookahead (?=\.com)
// Assert that the Regex below matches
// \. matches the character . with index 4610 (2E16 or 568) literally (case sensitive)
// com matches the characters com literally (case sensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let data = "http://allthingsjs.com youtube.com google.com yahoo.ca"

let reg = /\w+(?=\.com)/g

let arr = []

arr = data.match(reg)

// ^ asserts position at start of the string
// Positive Lookahead (?=.{8,})
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// {8,} matches the previous token between 8 and unlimited times, as many times as possible, giving back as needed (greedy)
// Positive Lookahead (?=.*[A-Z])
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// Match a single character present in the list below [A-Z]
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
// Positive Lookahead (?=.*[a-z])
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// Match a single character present in the list below [a-z]
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// Positive Lookahead (?=.*[0-9])
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// Match a single character present in the list below [0-9]
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// $ asserts position at the end of the string
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let passwordRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g
