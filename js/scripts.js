
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function handleRoll(game) {
    game.roll(rollDice());
    display(game);
}

function handleEnd(game) {
    game.endTurn();
    display(game);
}

function display(game) {
    let score1 = document.querySelector("#1");
    let score2 = document.querySelector("#2");
    let turnScore = document.querySelector("#turnScore");
    let turn = document.querySelector("#turn");

    score1.innerText = game.player1Score;
    score2.innerText = game.player2Score;
    turnScore.innerText = game.turnScore;
    if (game.isPlayer1Turn) {
        turn.innerText = "Player1";
    }
    else {
        turn.innerText = "Player2";
    }
    turn.innerText += "'s turn";
}

window.onload = function () {
    let game = new GameState();
    let rollButton = document.querySelector("#roll");
    let endButton = document.querySelector("#endGame");
    rollButton.addEventListener("click", () => handleRoll(game));
    endButton.addEventListener("click", () => handleEnd(game));
}