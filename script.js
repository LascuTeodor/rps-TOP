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
            console.log("Make a choice")
            break;
    }
}