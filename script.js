'use strict';
/* // ------------------------------- PROJECT #1: Guess My Number!
// document.querySelector('.message')
// .textContent()
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('document'));

//  ------------------------------- 72. Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

// ------------------------------- 73-75.

const num = document.querySelector('.number');
const body = document.querySelector('body');
const sltGuess = document.querySelector('.guess');
const sltScore = document.querySelector('.score');

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMsg(msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(sltGuess.value);
    console.log(guess, typeof guess);
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    // When thereis no number
    if (!guess) {
        displayMsg('🚫 No number!');
    } else if (guess === randomNumber) {
        // CORRECT
        num.textContent = randomNumber;
        body.style.backgroundColor = '#60b347';
        num.style.width = '30rem';
        displayMsg('🎉 Correct Number!');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // WHEN GUESS IS WRONG
    } else if (guess !== randomNumber) {
        if (score > 1) {
            displayMsg(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            sltScore.textContent = score;
        } else {
            displayMsg('😭 You lost the game!');
            sltScore.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    displayMsg('Start guessing...');
    sltScore.textContent = score;
    sltGuess.value = '';
    num.textContent = '?';
    num.style.width = '15rem';
    body.style.backgroundColor = '';
});
