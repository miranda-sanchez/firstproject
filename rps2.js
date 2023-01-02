let playGame  = confirm("Shall we play 'rock, paper, or scissors?");
if (playGame){
    while (playGame) {
        const playerChoice = prompt("Enter 'rock, paper, or scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === 'rock' ||
                playerOne === 'paper' ||
                playerOne === 'scissors') {
                const computerChoice = Math.floor(Math.random() * (3+1));
                const rpsArray = ['rock', 'paper', 'scissors'];
                const computer = rpsArray[computerChoice];

                const result =
                    playerOne === computer
                    ? 'Tie game!'
                    : playerOne === 'rock' && computer === 'paper'
                    ? `You: ${playerOne}\nComputer: ${computer}.\nComputer wins.`
                    : playerOne === 'paper' && computer === 'scissors'
                    ? `You: ${playerOne}\nComputer: ${computer}.\nComputer wins.`
                    : playerOne === 'scissors' && computer === 'rock'
                    ? `You: ${playerOne}\nComputer: ${computer}.\nComputer wins.`
                    : `You: ${playerOne}\nComputer: ${computer}.\nYou win!`
                alert(result);
                playGame = confirm("Do you want to play again?");
                if (!playGame) alert ("Ok. Thanks for playing!");
                continue;
            } else {
                alert ("You didn't enter 'rock, paper, or scissors. Try again!")
                continue;
            }      
        } else { 
            alert("I guess you've changed your mind. Maybe next time!");
            break;
        }
    }
} else {
    alert("Ok. Maybe next time!");
}
