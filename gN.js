'use strict';

let generatedNumbers;
let attemptsCount;

resetGame();
startGame();

function resetGame() {
    attemptsCount = 0;
    generatedNumbers = [];

    while (generatedNumbers.length < 4) {
        const part = Math.floor(Math.random()*10);
        if (!generatedNumbers.includes(part)) {
            generatedNumbers.push(part);
        }

    }
}

function startGame() {
    while (true) {
        const guess = prompt('Попробуйте отгадать 4 различных целых положительных цифры, загаданных комьютером. \n' +
        'Можете ввести -1 если хотите закончить игру.');

        if (guess === '-1') {
            return alert('Игра завершена');
        }

        if (!isValidGuess(guess)) {
            alert('Небходимо ввести 4 целые положительные цифры');
            continue;
        }
        alert('Разбираем значение пользователя.')
    }
}

function isValidGuess() {
    
}
