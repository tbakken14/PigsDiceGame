class GameState {
    isPlayer1Turn = true;
    turnScore = 0;
    player1Score = 0;
    player2Score = 0;

    endTurn() {
        if (this.isPlayer1Turn) {
            this.player1Score += this.turnScore;
        }
        else {
            this.player2Score += this.turnScore;
        }
        this.isPlayer1Turn = !this.isPlayer1Turn;
        this.turnScore = 0;
    }

    roll(rollValue) {
        if (rollValue === 1) {
            this.turnScore = 0;
            this.endTurn()
        }
        else {
            this.turnScore += rollValue;
        }
    }
}