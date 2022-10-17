let name = prompt("Please enter your name.");
console.log("The name is: " + (name ?? "not entered"));
if (name && name.trim()) {
    console.log("The name is: " + name.trim());
} else {
    console.log("The name is: " + "not entered");
}