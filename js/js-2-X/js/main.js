// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber++;
//     console.log("My number: " + myNumber);
// }

// don't create an endless loop.

// let myNumber = 50;
// do {
//     console.log("My number: " + myNumber);
// } while (myNumber < 50);

// let name = "Andrej"
// for (let i = 0; i < name.length; i++) {
//     console.log(name.charAt(i));
// }

// let name = "Andrej"
// let counter = 0;
// let myLetter;
// while (true) {
//     myLetter = name[counter];
//     console.log("My Letter = " + myLetter)
//     if (myLetter === "r") {
//         break;
//     }
//     counter++;
// }

let name = "Andrej"
let counter = 0;
let myLetter;
while (counter <= 5) {
    myLetter = name[counter];
    console.log("My Letter = " + myLetter)
    if (counter === 2) {
        counter += 2;
        continue;
    }
    if (myLetter === "r") {
        break;
    }
    counter++;
}