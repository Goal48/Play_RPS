let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
     console.log(" User Choice is =",userchoice);
     // Genarate computer choice
    const compchoice = gencompchoice();
    console.log("Computer choice is =",compchoice);

    if(compchoice === userchoice){
        draw(userchoice,compchoice);
    }
    else{
        let userwin = true;
        if(userchoice === "Rock"){
            // paper , scissor
            userwin = (compchoice === "Paper") ? false : true;
        }
        else if(userchoice === "Paper"){
            // rock , scissor
            userwin = (compchoice === "Scissors") ? false : true;
        }
        else{
            // paper , rock
            userwin = (compchoice === "Rock") ? false : true;
        }
        userWinner(userwin,userchoice,compchoice);
    }
    
};

const userWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText = userscore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "lightgreen";
    }
    else{
        compscore++;
        comppara.innerText = compscore;
        console.log("You lose");
          msg.innerText = `You Lost! Your ${compchoice} beats ${userchoice}`;
          msg.style.backgroundColor = "red";
    }
}

const draw = (userchoice,compchoice) =>{
    console.log("The Game is Draw.");
     msg.innerText = `Draw! Your ${userchoice} equal ${compchoice}`;
      msg.style.backgroundColor = "gray";
}

const gencompchoice = () =>{
    const options = ["Rock","Paper","Scissors"];
   const randonIndex = Math.floor(Math.random()*3);
   return options[randonIndex];
}