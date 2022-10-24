// const myArray = [];
// myArray[0] = "Andrej";
// myArray[1] = 1001;
// myArray[2] = false;

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);
// console.log(myArray[1]);

// myArray.push("school")
// console.log(myArray);
//
// const lastItem = myArray.pop()
// console.log(myArray);
// console.log(lastItem);
//
// const newLength = myArray.unshift(42);
// console.log(myArray);
// console.log(newLength);
//
// const firstItem = myArray.shift();
// console.log(myArray);
// console.log(firstItem);
// console.log(myArray[1]);

// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// myArray.splice(1, 1);
// myArray.splice(1, 1, 42);
// myArray.splice(1, 0, 42, "test");
// console.log(myArray);
// console.log(myArray[1]);

const myArray = ["A", "B", "C", "D", "E", "F"];
console.log(myArray);

const newArray = myArray.slice(2, 5);
console.log(newArray);

console.log(myArray.reverse());
const separator = "; ";
const joined = myArray.join(separator);
console.log(joined);
console.log(joined.split(separator));

const arrayA = ["A", "B", "C"];
const arrayB = ["D", "E", "F"];
console.log(arrayA.concat(arrayB))
console.log([...arrayA, ...arrayB])


const multiArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(multiArray);
console.log(multiArray[1][1]);
