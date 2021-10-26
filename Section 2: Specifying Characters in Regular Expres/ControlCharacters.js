// \ escape character
// backslash(\) character communicate to the regex engine to tell us the literal value for the character that follows
// \t tab
// \v vertical line
// \n newline
// \r carriage return

let regex1 = /h\n/g
let regexTab = /h\t/g

const txt = "hot h  t hit h\n t"

txt.match(regex1)
txt.match(regexTab)
