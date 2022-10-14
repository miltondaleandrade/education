const myNumber = 42

console.log(myNumber)

const myFloat = 42.0

const myString = "42"

console.log(myFloat)

console.log(myFloat === myNumber)
console.log(myString === myNumber)
console.log(myString === myFloat)
console.log(Number(myString) === myFloat)
console.log(Number(myString) === myNumber)
console.log(Number("Andrej"))
console.log(Number(true))
console.log(Number(false))
console.log(Number.isInteger("Andrej"))
console.log(Number.isInteger(42))
console.log(Number.isInteger(42.0))
console.log(Number.isInteger(true))

console.log(Number.parseFloat("12.346").toFixed(2))
console.log(typeof Number.parseFloat("12.346"))
console.log(typeof Number.parseFloat("12.346").toFixed(2))
console.log(isNaN(Number.parseFloat("12.346")))
console.log(isNaN(Number.parseFloat("abc")))
console.log(Number.isNaN(Number.parseFloat("abc")))
