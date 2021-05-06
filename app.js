import { didUserWin } from './functions.js';
import { getRandomThrow } from './get-random-throw.js';

const userGuess = document.getElementsByName('r-p-s');
const gameResult = document.getElementById('game-result');
const totalResets = document.getElementById('total-resets');
const submitButton = document.getElementById('button');
const resetButton = document.getElementById('reset');
const picOne = document.getElementById('pic1');
const picTwo = document.getElementById('pic2');
const hidden = document.getElementsByClassName('hidden-stuff');

let userThrow = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let resets = 0;

submitButton.addEventListener('click', () => {
    let compThrow = getRandomThrow();
    if (userGuess[0].checked) {
        userThrow = userGuess[0].value;
        picOne.src="http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg";
    }
    if (userGuess[1].checked) {
        picOne.src="http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg";
        userThrow = userGuess[1].value;
    }
    if (userGuess[2].checked) {
        picOne.src="http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg";
        userThrow = userGuess[2].value;
    }
    hidden[0].style.opacity = 1;
    hidden[1].style.opacity = 1;
    hidden[2].style.opacity = 1;
    let currentResult = didUserWin(userThrow, compThrow);
    if (compThrow === 1) {
        picTwo.src="http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg";
        compThrow = "rock"
    }
    if (compThrow === 2){
        picTwo.src="http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg";
        compThrow = "paper"
    }
    if (compThrow === 3) {
        picTwo.src="http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg";
        compThrow = "scissors"
    }
    if  (currentResult === 1) {
        wins++;
        gameResult.textContent = `You win! Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses} Draws: ${draws}`
    }
    if  (currentResult === 0) {
        draws++;
        gameResult.textContent = `You tied. Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses} Draws: ${draws}`
    }
    if  (currentResult === -1) {
        losses++;
        gameResult.textContent = `You lose :( Your opponent threw ${compThrow}. Wins: ${wins} Losses: ${losses} Draws: ${draws}`
    }
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    resets++;
    gameResult.textContent = `Wins: ${wins} Losses: ${losses} Draws: ${draws}`
    totalResets.textContent = `Resets: ${resets}`;
    hidden[0].style.opacity = 0;
    hidden[1].style.opacity = 0;
    hidden[2].style.opacity = 0;
})