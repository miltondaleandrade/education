let playerOne = "scissors"
let computer = "rock"

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("Player one wins");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("Player one wins");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("Player one wins");
        }
}