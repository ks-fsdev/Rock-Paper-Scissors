let userScore = 0;
let codeScore = 0;
                                                    //INHERITING
const selections = document.querySelectorAll(".choices");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const codeScorePara = document.querySelector("#comp-score");

                                                    //GENERATING COMPUTER CHOICE
const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}
                                                    // DRAW GAME FUNCTION
const drawGame = () => {
    message.innerText = "Game was Draw! Play Again.";
    message.style.backgroundColor = "rgb(13, 25, 95)";
    message.style.color = "white";
}
                                                    //SHOW WINNER FUNCTION
const showWinner = (userWin, userChoice, codeChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `YOU WIN! ${userChoice} beats ${codeChoice}.`;
        message.style.backgroundColor = "rgb(8, 168, 29)";
    } else {
        codeScore++;
        codeScorePara.innerText = codeScore;
        message.innerText = `YOU LOSE... ${codeChoice} beats ${userChoice}.`;
        message.style.backgroundColor = "rgb(168, 8, 8)";
        message,style.color = "white";
    }
}
                                                    //PLAYGAME
const playGame = (userChoice) => {
    const codeChoice = generateCompChoice();
                                                    // IF ELSE GAME PATTERN
    if(userChoice === codeChoice){
        //draw
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock") {
            //paper or scissors
            userWin = codeChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock or scissors
            userWin = codeChoice === "rock" ? true : false;
        } else {
            //rock or paper 
            userWin = codeChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, codeChoice);
    }
}
                                                    //TRACKING CLICKING ON USER SELECTION
selections.forEach((selection) => {
    selection.addEventListener("click", () => {
                                                    //GETTING USER CHOICE  
        const userChoice = selection.getAttribute("id");
        playGame(userChoice);
    })
})
                                                    //TOOGLE

const body = document.querySelector("body");
let modeBtn = document.querySelector("button");
const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const headingTop = document.querySelector("h1");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";

        body.classList.add("dark");
        body.classList.remove("light");

        headingTop.classList.add("heading-dark");
        headingTop.classList.remove("heading-light");

        image1.setAttribute("src", "images/ROCK.webp");
        image2.setAttribute("src", "images/PAPER.webp");
        image3.setAttribute("src", "images/SCISSORS.webp");

        modeBtn.classList.add("button-dark");
        modeBtn.classList.remove("button-light");
    } else {
        currMode = "light";

        body.classList.add("light");
        body.classList.remove("dark");

        headingTop.classList.add("heading-light");
        headingTop.classList.remove("heading-dark");

        image1.setAttribute("src", "images/rock-lig.webp");
        image2.setAttribute("src", "images/papper-lig.webp");
        image3.setAttribute("src", "images/siss-lig.webp");
        
        modeBtn.classList.add("button-light");
        modeBtn.classList.remove("button-dark");

    }
})
