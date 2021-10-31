/*
  Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
  Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/

let phoneNums = [
  "801-766-9754",
  "(801)-545-5454",
  "435.666.1212",
  "(801)796-8010",
  "4355559801",
  "43-5555-9801",
  "43s5555g9801",
]

let regEx = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/

newArray = []
newArray = phoneNums.filter((elem) => regEx.test(elem))
console.log(newArray)
