"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TennisGame_1 = require("./TennisGame");
var game = new TennisGame_1.TennisGame('player1', 'player2', 0, 3);
game.getScore();
console.log(game.score);
