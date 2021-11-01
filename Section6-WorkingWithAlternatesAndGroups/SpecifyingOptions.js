// 1st Alternative \bmonday
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// monday matches the characters monday literally (case insensitive)
// 2nd Alternative tuesday
// tuesday matches the characters tuesday literally (case insensitive)
// 3rd Alternative wednesday
// wednesday matches the characters wednesday literally (case insensitive)
// 4th Alternative thursday
// thursday matches the characters thursday literally (case insensitive)
// 5th Alternative friday
// friday matches the characters friday literally (case insensitive)
// 6th Alternative saturday
// saturday matches the characters saturday literally (case insensitive)
// 7th Alternative sunday\b
// sunday matches the characters sunday literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
let regEx = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/

// 1st Alternative \b[a-z]{3}day\b
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Match a single character present in the list below [a-z]
// {3} matches the previous token exactly 3 times
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// day matches the characters day literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// 2nd Alternative \b[a-z]{4}day\b
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Match a single character present in the list below [a-z]
// {4} matches the previous token exactly 4 times
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// day matches the characters day literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// 3rd Alternative \b[a-z]{5}day\b
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Match a single character present in the list below [a-z]
// {5} matches the previous token exactly 5 times
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// day matches the characters day literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// 4th Alternative \b[a-z]{6}day\b
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Match a single character present in the list below [a-z]
// {6} matches the previous token exactly 6 times
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// day matches the characters day literally (case insensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
let regEx = /\b[a-z]{3}day\b|\b[a-z]{4}day\b|\b[a-z]{5}day\b|\b[a-z]{6}day\b/

const txt = "Inplant this idea: plan to plant multiple trees on this planet."
