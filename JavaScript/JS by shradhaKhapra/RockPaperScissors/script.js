let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawGame = () => {
    console.log("Game Drawn");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "Blue";
}

const playGame = (userChoice) => {
    console.log("User chioce = ",userChoice);
    const comChoice = genCompChoice();
    console.log(`Computer choice = `,comChoice);

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false: true;
        }else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

const showWinner = (userWin) => {
    if(userWin){
        msg.innerText = "You win!!";
        console.log("you win!!!!");
        msg.style.backgroundColor = "Green";
    }else{
        console.log("You loose");
        msg.innerText = "You Loose!!";
        msg.style.backgroundColor = "Red";
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute ("id");
       // console.log("choice clicked was", userChoice);
        playGame(userChoice);
    });
} );