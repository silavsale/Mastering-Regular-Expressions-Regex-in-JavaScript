let regEx = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/

const txt = "2011/4/5"

const arr = regEx.exec(txt)

console.log(arr)

let year, month, day

if (regEx.test(txt)) {
  year = arr[1]
  month = arr[2]
  day = arr[3]
} else {
  throw new Error("Invalid regex or text string")
}
