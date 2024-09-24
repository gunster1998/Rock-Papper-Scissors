function getComputerChoise() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice() {
    let getHumaenAnswer = prompt("Введите свой выбор ответа. Привет - ножницы,бумага,камень. Всего 5 итераций.")
    getHumaenAnswer = getHumaenAnswer.toLowerCase()
    if (getHumaenAnswer == "ножницы" || getHumaenAnswer == "бумага" || getHumaenAnswer == "камень") {
        return getHumaenAnswer
    }
    else {
        alert("Вы ввели не валидные данные")
        return getHumanChoice()
    }

}

let humenScore = 0;
let computerScore = 0;
const computerArray = ["ножницы", "бумага", "камень"]
function playRound() {
    let humenChoise = getHumanChoice()
    let computerChoise = getComputerChoise()
    computerChoise = computerArray[computerChoise];
    if (humenChoise == computerChoise) {
        alert("Ничья")
        console.log("Ничья")
    }
    else if (humenChoise == "ножницы" && computerChoise == "камень" ||
        humenChoise == "бумага" && computerChoise == "ножницы" ||
        humenChoise == "камень" && computerChoise == "бумага") {
        humenScore--;
        computerScore++
        console.log("Вас унизил компьютер, ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " очков")
        alert("Вас унизил компьютер, ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " очков")
    }
    else {
        humenScore++
        computerScore--
        console.log("Вы добавили себе очко ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " очков")
        alert("Вы добавили себе очко ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " очков")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (humenScore > computerScore) {
        alert("Вы победили ваш счет:" + humenScore + " и счет компьютера: " + computerScore + " очков")
    }
    else {
        alert("Вы проиграли ваш счет:" + humenScore + " и счет компьютера: " + computerScore + " очков")
    }
    if (confirm("Вы хотите еще раз поиграть ")) {
        playGame();
    }
    else {
        alert("Пока")
    }
}

playGame()