let compScore = 0;
let playerScore = 0;
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const outcome = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const compScoreSpan = document.querySelector('.comp-score')



const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
}



const playRound = (playerSelection, computerSelection) => {

    const p = document.createElement('p')

    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both picked ${playerSelection}`
        p.style.backgroundColor = "#2f2f2f";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        p.innerText = 'You lost! Rock crushes scissors'
        p.style.backgroundColor = "red";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = 'You Won! scissor cuts paper'
        p.style.backgroundColor = "green";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        p.innerText = 'You lost! paper covers rock'
        p.style.backgroundColor = "red";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = 'You Won! Rock crushes scissors'
        p.style.backgroundColor = "green";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        p.innerText = 'You lost! scissors cuts paper'
        p.style.backgroundColor = "red";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'You won! paper covers rock'
        p.style.backgroundColor = "green";
    }
    outcome.appendChild(p);
}



const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won')
        h2.style.cssText = "color:white;"
        h2.style.backgroundColor = "green";
        h2.style.padding = "1%";
        h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer.`
        outcome.append(h2)
    }
    if (compScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won')
        h2.style.cssText = "color:white;"
        h2.style.backgroundColor = "red";
        h2.style.padding = "1%";
        h2.innerText = `You lost ${playerScore} to ${compScore} great job beating the computer.`
        outcome.append(h2)
    }
}



const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    compScoreSpan.innerText = `Computer Score: ${compScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});