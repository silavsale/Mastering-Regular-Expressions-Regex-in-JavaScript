// . matches any character (except for line terminators). Line terminators are \n

let regex1 = /h.t/g

const txt = "how it that so hot? h t"

txt.match(regex1)
