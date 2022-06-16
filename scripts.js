let squares = document.getElementsByClassName('square')
let containerMessage = document.getElementsByClassName('result-box')[0]
let messageContent = document.getElementsByClassName('message-result-box')[0]
let confirmButton = document.getElementById('confirm-reset')
let currentPlayer = 'X'
let currentGame = ['','','','','','','','','']
let turnGame = 0
let result = document.getElementById('result')
let scoreboardX = document.getElementsByClassName('scoreboardX')[0]
let scoreboardO = document.getElementsByClassName('scoreboardO')[0]
let currentScoreboardX = 0
let currentScoreboardO = 0

function changePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }    
}

function updateScoreboard() {
    if(currentPlayer==='X'){
        currentScoreboardX = currentScoreboardX + 1
        scoreboardX.innerHTML = currentScoreboardX
    }
    else if(currentPlayer==='O'){
        currentScoreboardO = currentScoreboardO + 1
        scoreboardO.innerHTML = currentScoreboardO
    }
}

function messageContainer() {
    result.innerHTML = (currentPlayer + " Ganhou a ultima rodada")
    if (result.innerHTML === 'X Ganhou a ultima rodada') {
        messageContent.innerHTML = `Jogador  '${currentPlayer}' ganhou e agora possui ${currentScoreboardX} na pontuação total!`
    }
    else if (result.innerHTML === 'O Ganhou a ultima rodada') {
        messageContent.innerHTML = `Jogador  '${currentPlayer}' ganhou e agora possui ${currentScoreboardO} na pontuação total!`
    }
}

function newGame() {
    for (let i = 0; i < squares.length; i++) {
        const box = squares[i];
        box.innerHTML = ''
    }
    currentGame = ['','','','','','','','','']
    turnGame = 0
}

function containerVisible() {
    containerMessage.style.display = "flex";
}

function drawGame() {
    if(turnGame === 9){
        result.innerHTML = 'EMPATE'
        if (result.innerHTML === 'EMPATE') {
            messageContent.innerHTML = `EMPATOU! VOCÊS SERIAM OS DEUSES DO JOGO DA VELHA?`
        }
        containerVisible()
    }
}

for (let i = 0; i < squares.length; i++) {
    let square = squares[i]

    square.addEventListener('click', function () {
        if(square.innerHTML === '') {
            square.innerHTML = currentPlayer
            turnGame++
            currentGame[i] = currentPlayer
            changePlayer()
        }
        setWinner()
        console.log(currentGame)
    })   
}

function setWinner() {
    drawGame()

    if(currentGame[0] === currentGame[1] && currentGame[1] === currentGame[2] && currentGame[0]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5] && currentGame[3]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8] && currentGame[6]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6] && currentGame[0]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7] && currentGame[1]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8] && currentGame[2]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8] && currentGame[0]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[2] === currentGame[4] && currentGame[4] === currentGame[6] && currentGame[2]){
        changePlayer()
        updateScoreboard()
        messageContainer()
        containerVisible()
    }

    
}

confirmButton.addEventListener('click', function () {
    newGame()
    containerMessage.style.display = "none";
})
