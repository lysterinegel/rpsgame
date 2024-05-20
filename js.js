choices = ["rock", "paper", "scissors"]
yourChoice = ""
roundNumber = 0
computerScore = 0
humanScore = 0


function playgame(){
    while (roundNumber <= 4 ) {

        yourChoice = prompt("what is your choice? ")
        computerChoice = choices[Math.floor(Math.random() * 3)]

        if (yourChoice === computerChoice) {
            console.log("This Round is a tie!")
            roundNumber++
        }
        else {
            switch(yourChoice){
                case "rock":
                    if (computerChoice === "scissors"){
                        console.log("You win this Round!")
                        humanScore++
                        roundNumber++
                    }
                    else {
                        console.log("You Lose this Round!")
                        computerScore++
                        roundNumber++
                    }
            }
            switch(yourChoice){
                case "paper":
                    if (computerChoice === "rock"){
                        console.log("You win this Round!")
                        humanScore++
                        roundNumber++
                    }
                    else {
                        console.log("You Lose this Round!")
                        computerScore++
                        roundNumber++
                    }
            }
            switch(yourChoice){
                case "scissors":
                    if (computerChoice === "paper"){
                        console.log("You win this Round!")
                        humanScore++
                        roundNumber++
                    }
                    else {
                        console.log("You Lose this Round!")
                        computerScore++
                        roundNumber++
                    }
            }
        }
    }
    
}

function countscore(){
    if (humanScore === computerScore){
        console.log("This Game Is a Tie! Your Score: "+ humanScore + " Computers Score: " + computerScore)
    }
    else if (humanScore >= computerScore) {
        console.log("You Win this Game! Your Score: "+ humanScore + " Computers Score: " + computerScore)
    }
    else {
        console.log("You Lose this Game! Your Score: "+ humanScore + " Computers Score: " + computerScore)
    }
}

playgame();
countscore();
prompt("Would You like To Start a New Game?: ")






// upper case/lower case input and make it so they cant cancel or exit. also invalid choice thats not in array.