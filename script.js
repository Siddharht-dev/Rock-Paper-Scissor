let userScore = 0;
let computerScore = 0;

let user = document.querySelector("#user-score");
let computer = document.querySelector("#computer-score");

let msg = document.querySelector(".message");



let arr = ["rock","paper","scissor"];

let computerChoice = ()=>{
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}



let options = document.querySelectorAll(".option > div");

options.forEach((option)=>{

    option.addEventListener("click", ()=>{
        let userChoice = option.classList[0];
        let compChoice = computerChoice();

        console.log(userChoice);
        console.log(compChoice);

        if((compChoice == "rock" && userChoice == "scissor")
        || (compChoice == "paper" && userChoice == "rock")
        || (compChoice == "scissor" && userChoice == "paper")){
            computerScore++;
            computer.innerHTML = computerScore;
            msg.innerHTML = "Computer won: " + compChoice + "beats" + userChoice;
        }

        else if(userChoice == compChoice){
            msg.innerHTML = "Its a Draw";
        }
        else{
            userScore++;
            user.innerHTML = userScore;
            msg.innerHTML = "User won: " + userChoice + "beats" + compChoice;
        }
    });

});

