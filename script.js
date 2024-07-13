function getComputerMove() {
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"

    let computerMove = 0
    computerMove = Math.random(computerMove)

    if(computerMove <= 0.33)
        return rock
    else if(computerMove >= 0.66)
        return paper
    else return scissors
}

function getHumanMove() {
    let humanMove = prompt("Your Move:")
    console.log(humanMove)
}


getHumanMove()