
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoise() {
        const arrayObjectGame = ["ножницы", "бумага", "камень"];
        return arrayObjectGame[Math.floor(Math.random() * 3)];
    };
    
    function getHumanChoice() {
        let getHumanAnswer = prompt("Это игра камень,ножницы,бумага. Введите одно из трех слов - ножницы,бумага,камень. Всего 5 итераций.")
        getHumanAnswer = getHumanAnswer ?.toLowerCase() ?? ""
        if (getHumanAnswer == "ножницы" || getHumanAnswer == "бумага" || getHumanAnswer == "камень") {
            return getHumanAnswer;
        }
        else {
            alert("Вы ввели не валидные данные!")
            return getHumanChoice();
        };
    };

    function playRound() {
        const winsChoice = {
            "бумага" : ["камень"],
            "ножницы" : ["бумага"],
            "камень" : ["ножницы"]
        };
        let humanChoise = getHumanChoice();
        let computerChoise = getComputerChoise();
        if (humanChoise == computerChoise) {
            return "draw";
        };
        if (winsChoice[humanChoise].includes(computerChoise)) {
            return "humanWin";
        }
        else {
            return "computerWin" ;
        };
    };
    
    for (let i = 0; i < 5; i++) {
         const getResultWin = playRound();
         if (getResultWin == "humanWin") {
            humanScore++;
            alert(`Вы победили ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
         }
         else if (getResultWin == "computerWin") {
            computerScore++;
            alert(`Вас унизил компьютер, ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
         } 
         else if(getResultWin == "draw") {
            alert(`Ничья ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
         };
    };

    if (humanScore > computerScore) {
        alert(`Вы победили ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
    }
    else {
        alert(`Вы проиграли ваш счет: ${humanScore} и счет компьютера: ${computerScore}`);
    };

    if (confirm("Вы хотите еще раз поиграть?")) {
        humanScore = 0;
        computerScore = 0;
        playGame();
    }
    else {
        alert("Пока");
    }
}

playGame();