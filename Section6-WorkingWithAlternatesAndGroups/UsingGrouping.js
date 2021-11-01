// 1st Capturing Group ([a-d][1-5]){5}
// {5} matches the previous token exactly 5 times
// A repeated capturing group will only capture the last iteration. Put a capturing group around the repeated group to capture all iterations or use a non-capturing group instead if you're not interested in the data
// Match a single character present in the list below [a-d]
// a-d matches a single character in the range between a (index 97) and d (index 100) (case sensitive)
// Match a single character present in the list below [1-5]
// 1-5 matches a single character in the range between 1 (index 49) and 5 (index 53) (case sensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let regEx = /([a-d][1-5]){5}/g

const txt = "a5c3a2b1d1"

// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// 1st Capturing Group (monday|tuesday|wendnesay)
// 1st Alternative monday
// monday matches the characters monday literally (case sensitive)
// 2nd Alternative tuesday
// tuesday matches the characters tuesday literally (case sensitive)
// 3rd Alternative wendnesay
// wendnesay matches the characters wendnesay literally (case sensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let regEx2 = /\b(monday|tuesday|wendnesay)\b/g

const txt2 =
  "Today is monday and tomorrow is tuesday and then we have wendnesay"
