let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


function getComputerMove() {
    let randomMove = 0;
    randomMove = Math.floor(Math.random() * 3);
    switch (randomMove) {
        case 0:
            return 'ROCK';
            
        case 1:
            return 'PAPER';
        
        case 2:
            return 'SCISSORS';
        default:
            return null;
            
    }

}

function getPlayerMove() {
    let playerChoice = prompt("Your Move:").toUpperCase();
    if (playerChoice === 'ROCK') {
        return 'ROCK';
    }
    else if (playerChoice === 'PAPER') {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }

}




function playRound(playerMove, computerMove) {
    if(playerMove === computerMove)
        roundWinner = 'TIE'
    else if(playerMove === 'ROCK' && computerMove === 'PAPER' ||
        playerMove === 'PAPER' && computerMove === 'SCISSORS' ||
        playerMove === 'SCISSORS' && computerMove === 'ROCK'
    ){
        roundWinner = 'PLAYER WINS';
        playerScore++;
    }   
    else {
        roundWinner = 'COMPUTER WINS';
        computerScore++;
    }
        
}   

    
function game() {
    const playerMove = getPlayerMove();
    const computerMove = getComputerMove();
    playRound(playerMove,computerMove);

    console.log(`Player Move: ${playerMove}`);
    console.log(`Computer Move: ${computerMove}`);
    

}

game();

console.log(roundWinner);
console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`)