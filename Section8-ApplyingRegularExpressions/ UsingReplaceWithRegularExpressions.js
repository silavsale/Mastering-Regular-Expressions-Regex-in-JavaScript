let names = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Monica",
  "Crockett, Steven",
]

let regEx = /(\w+), (\w+)/

let newName = names.map((name) => {
  return name.replace(regEx, "$2 $1")
})
