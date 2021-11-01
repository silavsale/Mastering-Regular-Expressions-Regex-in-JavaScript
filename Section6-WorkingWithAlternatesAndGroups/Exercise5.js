let data = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Monica",
  "Crockett, Steven",
]

let regEx = /(\w+), (\w+)/

newArray = []

newArray.push(
  data.map((name) => {
    let arr = regEx.exec(name)
    if (arr !== null) {
      return arr[2] + " " + arr[1]
    } else {
      return null
    }
  })
)

console.log(newArray)
