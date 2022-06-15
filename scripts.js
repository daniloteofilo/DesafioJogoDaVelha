let squares = document.getElementsByClassName('celula')
let containerMessage = document.getElementsByClassName('result-box')[0]
let messageContent = document.getElementsByClassName('message-result-box')[0]
let confirmButton = document.getElementById('confirm-reset')
let currentPlayer = 'X'
let currentGame = ['','','','','','','','','']
let turnGame = 0
let resultado = document.getElementById('resultado')
let placarX = document.getElementsByClassName('placarX')[0]
let placarO = document.getElementsByClassName('placarO')[0]
let tabuleiroNovo = document.getElementById('tabuleiro-container')
let placarAtualX = 0
let placarAtualO = 0

function changePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }    
}

function atualizaPlacar() {
    if(currentPlayer==='X'){
        placarAtualX = placarAtualX + 1
        placarX.innerHTML = placarAtualX
    }
    else if(currentPlayer==='O'){
        placarAtualO = placarAtualO + 1
        placarO.innerHTML = placarAtualO
    }
}

function messageContainer() {
    resultado.innerHTML = (currentPlayer + " Ganhou a ultima rodada")
    if (resultado.innerHTML === 'X Ganhou a ultima rodada') {
        messageContent.innerHTML = `Jogador  '${currentPlayer}' ganhou e agora possui ${placarAtualX} na pontuação total!`
    }
    else if (resultado.innerHTML === 'O Ganhou a ultima rodada') {
        messageContent.innerHTML = `Jogador  '${currentPlayer}' ganhou e agora possui ${placarAtualO} na pontuação total!`
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
        resultado.innerHTML = 'EMPATE'
        if (resultado.innerHTML === 'EMPATE') {
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
        vencedor()
        console.log(tabuleiroNovo)
        console.log(currentGame)
    })   
}

function vencedor() {
    drawGame()

    if(currentGame[0] === currentGame[1] && currentGame[1] === currentGame[2] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5] && currentGame[3]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8] && currentGame[6]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7] && currentGame[1]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8] && currentGame[2]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }
    else if(currentGame[2] === currentGame[4] && currentGame[4] === currentGame[6] && currentGame[2]){
        changePlayer()
        atualizaPlacar()
        messageContainer()
        containerVisible()
    }

    
}

confirmButton.addEventListener('click', function () {
    newGame()
    containerMessage.style.display = "none";
})
