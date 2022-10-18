let playGame = confirm("Shall we play?");
if (playGame) {
    let choice = prompt("Please enter rock, paper or scissors.");
    let playerOne = choice ? choice.trim().toUpperCase() : choice;
    if (playerOne) {
        // todo
    } else {
        alert("I guess you changed your mind. Maybe next time! Bye!")
    }
} else {
    alert("Ok, maybe next time! Bye!")
}