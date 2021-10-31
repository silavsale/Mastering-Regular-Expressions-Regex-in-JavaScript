// \ escape character
// backslash(\) character communicate to the regex engine to tell us the literal value for the character that follows

let regex1 = /d\./g

const txt = "This could be the final word."

txt.match(regex1)
