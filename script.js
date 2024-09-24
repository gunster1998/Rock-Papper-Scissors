function getComputerChoise() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice() {
    let getHumaenAnswer = prompt("Это игра камень,ножницы,бумага. Введите одно из трех слов - ножницы,бумага,камень. Всего 5 итераций.")
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
        console.log("Вас унизил компьютер, ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " ")
        alert("Вас унизил компьютер, ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " ")
    }
    else {
        humenScore++
        computerScore--
        console.log("Вы добавили себе очко ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " ")
        alert("Вы добавили себе очко ваш счет: " + humenScore + " и счет компьютера: " + computerScore + " ")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (humenScore > computerScore) {
        alert("Вы победили ваш счет:" + humenScore + " и счет компьютера: " + computerScore + " ")
    }
    else {
        alert("Вы проиграли ваш счет:" + humenScore + " и счет компьютера: " + computerScore + " ")
    }
    if (confirm("Вы хотите еще раз поиграть ")) {
        humenScore = 0;
        computerScore = 0;
        playGame();
    }
    else {
        alert("Пока")
    }
}

playGame()