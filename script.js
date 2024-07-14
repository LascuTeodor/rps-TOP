let playerScore = 0
let computerScore = 0


function getRandomMove() {
    let randomMove = Math.floor(Math.random() * 3)
    switch (randomMove) {
        case 0:
            return 'ROCK'  
            break;
        case 1:
            return 'PAPER'
            break;
        case 2:
            return 'SCISSORS'
        default:
            
            break;
    }

    console.log(randomMove)
}

function getPlayerMove() {
    let playerChoice = prompt("Your Move:")
    if (playerChoice === 'ROCK') {
        playerChoice = 'ROCK'
    }
    else if (playerChoice === 'PAPER') {
        playerChoice = 'PAPER'
    } else {
        playerChoice = 'SCISSORS'
    }
    console.log(playerChoice)
}

getPlayerMove()