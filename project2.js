const main = document.querySelector('main')

let playerWins = 0
let playerTies = 0
let playerLoses = 0

function template() {
const template = `
<section>
    <h1>Rock Paper Scissors</h1>
    <h2>Wins: ${playerWins}</h2>
    <h2>Ties: ${playerTies}</h2>
    <h2>Loses: ${playerLoses}</h2>
</section>
`;
main.innerHTML = template
}
template()

const button1 = document.querySelector("#Rock");
const button2 = document.querySelector("#Paper");
const button3 = document.querySelector("#Scissors");

button1.addEventListener('click', function() {
    const h3Tag = document.createElement("h3");

    let userChoice = "Rock"
    console.log(userChoice)
    
    let computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else {computerChoice = "Scissors"
    }
    console.log(computerChoice)
    
    if(userChoice === computerChoice) {
        playerTies += 1;
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        playerLoses += 1;
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        playerWins += 1;
    }
    template()
    main.appendChild(h3Tag);
})

button2.addEventListener('click', function() {
    const secondH3Tag = document.createElement("h3");

    let userChoice = "Paper"
    console.log(userChoice)
    
    let computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else {computerChoice = "Scissors"
    }
    console.log(computerChoice)
    
    if(userChoice === computerChoice) {
        playerTies += 1;
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        playerLoses += 1;
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        playerWins += 1;
    }
    template()
    main.appendChild(secondH3Tag);
})

button3.addEventListener('click', function() {
    const thirdH3Tag = document.createElement("h3");
    
    let userChoice = "Scissors"
    console.log(userChoice)
    
    let computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else {computerChoice = "Scissors"
    }
    console.log(computerChoice)
    
    if(userChoice === computerChoice) {
        playerTies += 1;
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        playerLoses += 1;
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        playerWins += 1;
    }
    template()
    main.appendChild(thirdH3Tag);
})