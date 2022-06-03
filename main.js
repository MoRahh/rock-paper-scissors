
let array = ["Rock", "Paper", "Scissors"];
function computerPlay(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection==="rock" && computerSelection==="Paper"){
        console.log("You lost, Paper beats Rock")
    }
    else if(playerSelection==="paper" && computerSelection==="Rock"){
        console.log("You won, Paper beats Rock")
    }
    else if(playerSelection==="scissors" && computerSelection==="Paper"){
        console.log("You won, scissors beats paper")
    }
    else if(playerSelection==="paper" && computerSelection==="Scissors"){
        console.log("You Lose, scissors beats Paper")
    }
    else if(playerSelection==="rock" && computerSelection==="Scissors"){
        console.log("You won, rock beats scissors")
    }
    else if(playerSelection==="scissors" && computerSelection==="Rock"){
        console.log("You lose, rock beats scissors")
    }
    else if(playerSelection==="paper" && computerSelection==="Scissors"){
        console.log("You lost, scissors beats paper")
    }
    else if(playerSelection==="scissors" && computerSelection==="Paper"){
        console.log("You won, scissors beats paper")
    }
    else if(playerSelection==="rock" && computerSelection==="Rock"){
        console.log("Its a tie")
    }
    else if(playerSelection==="paper" && computerSelection==="Paper"){
        console.log("Its a tie")
    }
    else if(playerSelection==="scissors" && computerSelection==="Scissors"){
        console.log("Its a tie")
    }
    return playerSelection;
}

function game() {
    //Play game 5 times
    for (let i = 0; i < 5; i++) {
      // Call playRound function, passing in newly returned values
      // from the playerPlay and computerPlay functions and log to console
      return playRound(playerSelection, computerSelection);
    }
 }


const playerSelection = prompt("enter");
const computerSelection = computerPlay(array);
console.log(playRound(playerSelection, computerSelection));