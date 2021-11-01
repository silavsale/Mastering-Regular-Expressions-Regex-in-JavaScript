let phrase =
  "First number: 32, and a second number 100. Here is the last number 15."

let total = 0

let result = phrase.match(/\d+/g)

if (result) {
  //   let num1 = result[0],
  //     num2 = result[1],
  //     num3 = result[2]

  let total = result.reduce((sum, val) => sum + parseInt(val), 0)
}
