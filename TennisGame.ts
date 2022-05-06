export class TennisGame {
    score: string = '';
    player1Name: string;
    player2Name: string;
    player1_Score: number;
    player2_Score: number;
    tempScore: number;


    constructor(player1Name: string,
                player2Name: string,
                player1_Score: number,
                player2_Score: number) {
        this.player1_Score = player1_Score;
        this.player2_Score = player2_Score;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.tempScore = 0;
        this.score = '';
    }

    getScore() {
        if (this.player1_Score == this.player2_Score) {
            this.setTieScoreGame();
        } else if (this.player1_Score >= 4 || this.player2_Score >= 4) {
            this.checkWin();
        } else this.scoreDuringGame();
    }

    setTieScoreGame() {
        switch (this.player1_Score) {
            case 0:
                this.score = "Love-All";
                break;
            case 1:
                this.score = "Fifteen-All";
                break;
            case 2:
                this.score = "Thirty-All";
                break;
            case 3:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;

        }
    }

    checkWin() {
        let minusResult = this.player1_Score - this.player2_Score;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }

    scoreDuringGame() {
        for (let i = 1; i < 3; i++) {
            if (i === 1) this.tempScore = this.player1_Score;
            else {
                this.score += "-";
                this.tempScore = this.player2_Score;
            }
            switch (this.tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    }
}