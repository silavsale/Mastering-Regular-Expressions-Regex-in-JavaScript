/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

const phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-666-1212",
  "801-796-8010",
  "435-555-9801",
  "801-009-0909",
  "435-222-8013",
  "801-777-6655",
]

const regex1 = /801-/gm

// method 1
const result = phoneNums.filter((element) => regex1.test(element))

const newArray = []

// method 2
for (let index = 0; index < phoneNums.length; index++) {
  if (regex1.test(phoneNums[index])) {
    newArray.push(phoneNums[index])
  }
}

console.log(result)
console.log(newArray)
