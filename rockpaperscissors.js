let playGame = confirm ("Shall we play rock, paper or scissors?");
let playerChoice;
if (playGame) {
    let playerChoice = prompt("Choose between rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
            ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1)
                let computer = 
                computerChoice === 1 
                ? "rock"
                : computerChoice === 2
                ? "paper"
                : "scissors";

                let result =
                playerOne === computer
                ? "Tie game. Try again!"
                : playerOne === 'scissors' && computer === 'rock'
                ? `You: ${playerOne}\nComputer: ${computer}\n
                Computer wins. Try again!`
                : playerOne === 'rock' && computer === 'paper'
                ? `You: ${playerOne}\nComputer: ${computer}\n
                Computer wins. Try again!`
                : playerOne === 'paper' && computer === 'scissors'
                ? `You: ${playerOne}\nComputer: ${computer}\n
                Computer wins. Try again!`
                : `You: ${playerOne}\nComputer: ${computer}\n
                Congratulations: you win!`;
                
                alert(result)
                
                let playAgain = confirm("Do you want to play again?");
                playAgain
                    ? location.reload()
                    : alert("Ok. Thanks for playing!")

        } else {
            alert("You didn't enter 'rock', 'paper', or 'scissors'")
        }
    } else {
        alert("I guess you don't want to play. Maybe next time!")
    }
} else {
    alert("Ok, maybe next time!");
}
