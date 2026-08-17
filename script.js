let wins = 0;
let draws = 0;
let losses = 0;

function playGame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = "Draw!";
        draws++;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
        wins++;
    } else {
        result = "You Lose!";
        losses++;
    }

    document.getElementById("choice").textContent =
        "You chose: " + playerChoice + " | Computer chose: " + computerChoice;
    document.getElementById("result").textContent = result;
    document.getElementById("wins").textContent = wins;
    document.getElementById("draws").textContent = draws;
    document.getElementById("losses").textContent = losses;
}
