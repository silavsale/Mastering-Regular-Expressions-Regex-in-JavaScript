// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// < matches the character < with index 6010 (3C16 or 748) literally (case sensitive)
const rgx = /<p>.*?<\/p>/g

const txt =
  "<p>This is the first paragraph</p><p>Paragraph number two.</p>\n <p>This is the first paragraph</p><p>Paragraph number two.</p>"

rgx.test(txt)

console.log(txt.match(rgx))
