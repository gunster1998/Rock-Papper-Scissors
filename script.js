const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const count = document.querySelector('.count');
const resultDiv = document.querySelector('.result');
const resultInfo = document.querySelector('.resultInfo');

let humanScore = 0;
let computerScore = 0;
let roundCount = 5;
let roundNumber = 0;

function createEndButton() {
    let buttonEnd = document.getElementById('buttonEnd');
    if (!buttonEnd) {
        const buttonEnd = document.createElement('button');
        buttonEnd.id = 'buttonEnd';
        buttonEnd.innerText = 'Поиграть еще раз!';
        resultDiv.appendChild(buttonEnd);
        buttonEnd.addEventListener('click', () => newGame());
    }
    if (buttonEnd){
        buttonEnd.style.display = 'block';
    }
}

function newGame() {
    roundNumber = 0;
    humanScore = 0;
    computerScore = 0;
    resultInfo.innerText = ''; 
    const buttonEnd = document.getElementById('buttonEnd');
    if (buttonEnd) {
        buttonEnd.style.display = 'none'; 
    }
}

function lastAction() {
    createEndButton();
    if (humanScore > computerScore) {
        resultInfo.innerText = `Вы победили ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
        return
    } 

    if (humanScore < computerScore) {
        resultInfo.innerText = `Вы проиграли ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
        return
     } 
    resultInfo.innerText = `Ничья ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
} 

function playRound(humanChoise) {
    roundNumber++;
    function getComputerChoise() {
        const arrayObjectGame = ['ножницы', 'бумага', 'камень'];
        return arrayObjectGame[Math.floor(Math.random() * 3)];
    }

    const winsChoice = {
        'бумага' : ['камень'],
        'ножницы' : ['бумага'],
        'камень' : ['ножницы']
    }

    let computerChoise = getComputerChoise();

    if (roundNumber >  roundCount){
        return
    }
    if (humanChoise == computerChoise) {
        return 'draw';
    }
    if (winsChoice[humanChoise].includes(computerChoise)) {
        humanScore++;
        return 'winHuman';
    } 
    computerScore++;
    return 'winComputer';

};

function updateDom(choice) {
    let winner =  playRound(choice);

    if (roundNumber >= roundCount){
        lastAction();
        return;
    }
    
    switch(winner){
        case 'draw':
            resultInfo.innerText = `Ничья ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
            break
        case 'winHuman':
            resultInfo.innerText = `Вы выйграли этот раунд ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
            break
        default:
            resultInfo.innerText = `Вас унизил компьютер, ваш счет: ${humanScore} и счет компьютера: ${computerScore}`;
    }
}


rockButton.addEventListener('click', () => updateDom('камень'));

paperButton.addEventListener('click', () => updateDom('бумага'));

scissorsButton.addEventListener('click', () => updateDom('ножницы'));










// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;

//     function getComputerChoise() {
//         const arrayObjectGame = ['ножницы', 'бумага', 'камень'];
//         return arrayObjectGame[Math.floor(Math.random() * 3)];
//     };
    
//     function getHumanChoice() {
//         let getHumanAnswer = prompt('Это игра камень,ножницы,бумага. Введите одно из трех слов - ножницы,бумага,камень. Всего 5 итераций.')
//         getHumanAnswer = getHumanAnswer ?.toLowerCase() ?? ''
//         if (getHumanAnswer == 'ножницы' || getHumanAnswer == 'бумага' || getHumanAnswer == 'камень') {
//             return getHumanAnswer;
//         }
//         else {
//             alert('Вы ввели не валидные данные!')
//             return getHumanChoice();
//         };
//     };

//     function playRound() {
//         const winsChoice = {
//             'бумага' : ['камень'],
//             'ножницы' : ['бумага'],
//             'камень' : ['ножницы']
//         };
//         let humanChoise = getHumanChoice();
//         let computerChoise = getComputerChoise();
//         if (humanChoise == computerChoise) {
//             return 'draw';
//         };
//         if (winsChoice[humanChoise].includes(computerChoise)) {
//             return 'humanWin';
//         }
//         else {
//             return 'computerWin' ;
//         };
//     };
    
//     for (let i = 0; i < 5; i++) {
//          const getResultWin = playRound();
//          if (getResultWin == 'humanWin') {
//             humanScore++;
//             alert(`Вы победили ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
//          }
//          else if (getResultWin == 'computerWin') {
//             computerScore++;
//             alert(`Вас унизил компьютер, ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
//          } 
//          else if(getResultWin == 'draw') {
//             alert(`Ничья ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
//          };
//     };

//     if (humanScore > computerScore) {
//         alert(`Вы победили ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
//     }
//     else {
//         alert(`Вы проиграли ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
//     };

//     if (confirm('Вы хотите еще раз поиграть?')) {
//         humanScore = 0;
//         computerScore = 0;
//         playGame();
//     }
//     else {
//         alert('Пока');
//     }
// }

// playGame();