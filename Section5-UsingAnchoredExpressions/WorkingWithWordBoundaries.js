// \b Matches, without consuming any characters, immediately between a character matched by \w and a character not matched by \w (in either order). It cannot be used to separate non words from words.

// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// plan matches the characters plan literally (case sensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let regEx = /\bplan\b/

// \B assert position where \b does not match
// plan matches the characters plan literally (case sensitive)
// \B assert position where \b does not match
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
let regEx = /\Bplan\B/

const txt = "Inplant this idea: plan to plant multiple trees on this planet."
