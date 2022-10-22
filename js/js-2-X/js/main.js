// Function declaration Syntax:

// function sum(num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1
//     }
//     return num1 + num2;
// }
//
// console.log("Sum: " + sum(5, 10));

// function getUsernameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }
//
// console.log("Username: " + getUsernameFromEmail("andrej@gmail.com"));

// const getUsernameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }
//
// console.log("Username: " + getUsernameFromEmail("andrej@gmail.com"));

// const getUsernameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }
//
// console.log("Username: " + getUsernameFromEmail("john@gmail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("aNdReJ"));
