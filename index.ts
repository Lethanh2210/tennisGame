import {TennisGame} from "./TennisGame";

let game = new TennisGame('player1', 'player2', 0, 3);
game.getScore();
console.log(game.score);