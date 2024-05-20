choices = ["rock", "paper", "scissors"]
roundNumber = 0
computerScore = 0
humanScore = 0


// function playgame(){
//     while (roundNumber <= 4 ) {

//         yourChoice = ""
        
//         do {
//             yourChoice = prompt("what is your choice? ");
//             if (!choices.includes(yourChoice.toLowerCase())){
//                 console.log("Invalid Choice Try again")
//             }
//         } while (yourChoice === null || !yourChoice || !choices.includes(yourChoice.toLowerCase()))
        

//         yourChoice = yourChoice.toLowerCase();
//         computerChoice = choices[Math.floor(Math.random() * 3)]

//         if (yourChoice === computerChoice) {
//             console.log("This Round is a tie!")
//             roundNumber++
//         }
//         else {
//             switch(yourChoice){
//                 case "rock":
//                     if (computerChoice === "scissors"){
//                         console.log("You win this Round!")
//                         humanScore++
//                         roundNumber++
//                     }
//                     else {
//                         console.log("You Lose this Round!")
//                         computerScore++
//                         roundNumber++
//                     }
//             }
//             switch(yourChoice){
//                 case "paper":
//                     if (computerChoice === "rock"){
//                         console.log("You win this Round!")
//                         humanScore++
//                         roundNumber++
//                     }
//                     else {
//                         console.log("You Lose this Round!")
//                         computerScore++
//                         roundNumber++
//                     }
//             }
//             switch(yourChoice){
//                 case "scissors":
//                     if (computerChoice === "paper"){
//                         console.log("You win this Round!")
//                         humanScore++
//                         roundNumber++
//                     }
//                     else {
//                         console.log("You Lose this Round!")
//                         computerScore++
//                         roundNumber++
//                     }
//             }
//         }
//     }
    
// }

let playgame2 = () => {
    while(roundNumber <= 4 ){

        do {
        yourChoice = prompt("what is your choice? ");

        if (yourChoice === null) {
            continue;
        }

        if (!choices.includes(yourChoice.toLowerCase())){
            console.log("Invalid Choice Try again")
        }
        } while (yourChoice === null || !yourChoice || !choices.includes(yourChoice.toLowerCase()))
        
        
        yourChoice = yourChoice.toLowerCase();
        computerChoice = choices[Math.floor(Math.random() * 3)]
        
        let result = yourChoice === computerChoice ? "Its a Tie!" : 
        //if its not a tie we need to figure out who won, we list all winning possibiiltes for human, if none of them are true it means computer won.
        (yourChoice == "rock" && computerChoice == "scissors" || yourChoice == "paper" && computerChoice == "rock" || yourChoice == "scissors" && computerChoice == "paper") ? 
        (console.log("You Win this round! Computer Picked " + computerChoice + " You picked " + yourChoice),"You win!") 
        : (console.log("You Lose this round! Computer Picked " + computerChoice + " You picked " + yourChoice),"You Lose!")
        
        result == "You win!" ? humanScore++ : computerScore++
        
        roundNumber++
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


playgame2();
countscore();
prompt("Would You like To Start a New Game?: ")







// upper case/lower case input  XXX
// and make it so they cant cancel or exit. XXX
//  also invalid choice thats not in array.
// ternary




