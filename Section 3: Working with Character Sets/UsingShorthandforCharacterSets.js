// \d [0-9] matches any digits
// \w [a-zA-Z0-9_] \w matches any word character (equivalent to [a-zA-Z0-9_])
// \s [\t\r\n] \s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])

// \D matches any character that's not a digit (equivalent to [^0-9])
// \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
// \S matches any non-whitespace character (equivalent to [^\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])

const txt =
  "A string that contains numbers (12345)\n A second line _ (12345)           3 Tabs."
