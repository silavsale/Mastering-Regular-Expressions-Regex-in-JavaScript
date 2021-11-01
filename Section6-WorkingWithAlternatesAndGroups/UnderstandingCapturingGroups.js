// \2 matches the same text as most recently matched by the 2nd capturing group
let regEx = /^(\d\d\d\d)[-./](\d{1,2})[-./]\2$/ // works only if the month and day are the same number

//  ?: Non-capturing group

const txt = "2011/4/5"
