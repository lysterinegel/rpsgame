let choices = ['rock', 'paper', 'scissors']
let playerschoice = document.getElementById("playerschoice")
let computerschoice = document.getElementById("computerschoice")
let resultdisplay = document.getElementById("resultdisplay")
let roundnumber = document.getElementById("roundnumber")
let playerscore = document.getElementById("playerscore")
let computersscore = document.getElementById("computerscore")
let tiescore = document.getElementById("tiescore")
let computerscore = 0
let humanscore = 0
let tie = 0
round = 1

let playgame = (yourchoice) => {
    
    if (round < 6 ){
        computerchoice = choices[Math.floor(Math.random() * 3)]

        result = 
        yourchoice === computerchoice ? "its A tie!" : 
        yourchoice === 'rock' && computerchoice === 'scissors' ||
        yourchoice === 'paper' && computerchoice === 'rock' ||
        yourchoice === 'scissors' && computerchoice === 'paper' ? 
        "You Win!" : "You Lose!"
    
    
        result === 'its A tie!' ? tie++ : result === 'You Win!' 
        ? humanscore++ : computerscore ++ 
    
        playerschoice.textContent = 'Player: ' + yourchoice
        computerschoice.textContent = 'Computer: ' + computerchoice
        roundnumber.textContent = 'Round Number: ' + round
        resultdisplay.textContent = result
        computersscore.textContent = 'Computerscore:  ' + computerscore
        playerscore.textContent = 'Playerscore:  ' + humanscore
        tiescore.textContent = 'Tiescore:  ' + tie
    
        round++
    }
    if (round === 6) {
        resultdisplay.textContent = 
    
        humanscore === computerscore ? "THIS GAME IS A TIE!" : 
        
        humanscore >= computerscore ? 'YOU WIN THIS GAME!!' : 'YOU lOSE THIS GAME!!'
    }
 
    } 


let resetgame = () => {
computerscore = 0
humanscore = 0
tie = 0
round = 1

playerschoice.textContent = 'Player: ' 
        computerschoice.textContent = 'Computer: ' 
        roundnumber.textContent = 'Round Number: ' + 0
        resultdisplay.textContent = " "
        computersscore.textContent = 'Computerscore:  ' + 0
        playerscore.textContent = 'Playerscore:  ' + 0
        tiescore.textContent = 'Tiescore:  ' + 0

}





    