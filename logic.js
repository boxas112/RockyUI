function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) return -1;
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    ){
    return 1;
    } else {
    return 0;
    }
}
function computerChoice() {
    const outcomes = ["Rock", "Paper", "Scissors"];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}
function playerChoice(eventChoice) {
    return eventChoice;
}
function newGame() {
    headerWinnerEle.innerText = "";
    playerPointsEle.innerText = "0";
    computerPointsEle.innerText = "0";
    hiddenEle.classList.add('hidden');
    timesRematch++;

    if (timesRematch % 4 === 0) {
        headerWinnerEle.innerText = "Bravo you won!!";
    }
    return playerPoints = 0, computerPoints = 0, timesPerRound = 0;
}
function startGame() {
    for (btn of btnChoiceEle) {
        btn.addEventListener('click', (e) => {
            let currentPlayerChoice = e.target.name;
            let currentComputerChoice = computerChoice();

            if (timesPerRound < 5) {
                const theWinner = playRound(currentPlayerChoice, currentComputerChoice);
                if (theWinner === 1) {
                    playerPoints++;
                    playerPointsEle.innerText = playerPoints;
                    showStatusEle.innerText = `${currentPlayerChoice} beats Computer's ${currentComputerChoice} `;
                }
                else if (theWinner === 0) {
                    computerPoints++;
                    computerPointsEle.innerText = computerPoints;
                    showStatusEle.innerText = `${currentComputerChoice} beats Player's ${currentPlayerChoice} `;
                }
                else if (theWinner === -1) {
                    showStatusEle.innerText = `${currentComputerChoice} = ${currentPlayerChoice} `;
                }
                timesPerRound++;
            }
            if (timesPerRound === 5) {
                showStatusEle.innerText = '';
                if  (playerPoints > computerPoints) {
                    headerWinnerEle.innerText = 'Player Won!'
                }
                else if (playerPoints < computerPoints) headerWinnerEle.innerText = "Computer Won!"
                else headerWinnerEle.innerText = "Draw!";
                hiddenEle.classList.remove('hidden')
            }
        })
    }
}
const btnChoiceEle = document.querySelectorAll('.btn-choice');
const btnResetEle = document.querySelector('.btn-reset');
const headerWinnerEle = document.querySelector('.winner-is');
const playerPointsEle = document.querySelector('.player-points');
const computerPointsEle = document.querySelector('.computer-points');
const showStatusEle = document.querySelector('.show-status');
const hiddenEle = document.querySelector('.hidden');
let timesPerRound = 0, playerPoints = 0, computerPoints = 0;
let timesRematch = 0;

btnResetEle.addEventListener('click', newGame);

startGame();
//asdasdfd