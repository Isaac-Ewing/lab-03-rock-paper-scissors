import { didUserWin } from './functions.js';

const userGuess = document.getElementsByName('r-p-s');
const gameResult = document.getElementById('game-result');
const totalResult = document.getElementById('total-result');
const submitButton = document.getElementById('button');

let userThrow = 0;
let wins = 0;
let losses = 0;

submitButton.addEventListener('click', () => {
    let compThrow = Math.ceil(Math.random() * 3);
    if (userGuess[0].checked)
        userThrow = userGuess[0].value;
    if (userGuess[1].checked)
        userThrow = userGuess[1].value;
    if (userGuess[2].checked)
        userThrow = userGuess[2].value;
    let currentResult = didUserWin(userThrow, compThrow);
    if (compThrow === 1)
        compThrow = "rock"
    if (compThrow === 2)
        compThrow = "paper"
    if (compThrow === 3)
        compThrow = "scissors"
    if  (currentResult === 1) {
        wins++;
        gameResult.textContent = `You win! Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses}`
    }
    if  (currentResult === 0) {
        gameResult.textContent = `You tied. Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses}`
    }
    if  (currentResult === -1) {
        losses++;
        gameResult.textContent = `You lose :( Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses}`
    }
});