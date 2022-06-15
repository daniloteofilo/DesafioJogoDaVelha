// // let celula1 = document.getElementsByClassName("celula")[0]

// // celula1.addEventListener("click", function (){
// //     if(celula1.innerHTML === "X"){
// //         celula1.innerHTML = "O"
// //     }
// //     else {
// //         celula1.innerHTML = "X"
// //     }
// // })

// let celulas = document.getElementsByClassName("celula")

// let jogador1 = document.getElementById("jogador1")

// let jogador2 = document.getElementById("jogador2")

// let currentPlayer = 'X'

// function changePlayer () {
//     if (currentPlayer === 'X') {
//         currentPlayer = 'O'
//     } else {
//         currentPlayer = 'X'
//     }    
// }


// for (let i = 0; i < celulas.length; i++) {
//     let cadacelula = celulas[i];
    
//     cadacelula.addEventListener("click", function() {
//         if(cadacelula.innerHTML === "X"){
//             cadacelula.innerHTML = "O"
//         }   
//         else {
//             cadacelula.innerHTML = "X"
//         }
//     })
// }

// ======================================================================================

let squares = document.getElementsByClassName('celula')
let changeButton = document.getElementById('change')
let currentPlayer = 'X'
let currentGame = ['','','','','','','','','']
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

function newGame() {
    if (resultado.innerHTML === 'X Ganhou') {
        alert(`Jogador  '${currentPlayer}' ganhou e agora possui ${placarAtualX} na pontuação total!`)
    }
    else if (resultado.innerHTML === 'O Ganhou') {
        alert(`Jogador  '${currentPlayer}' ganhou e agora possui ${placarAtualO} na pontuação total!`)
    }
    for (let i = 0; i < squares.length; i++) {
        const box = squares[i];
        box.innerHTML = ''
    }
    
    currentGame = ['','','','','','','','','']
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


// changeButton.addEventListener('click', changePlayer)

for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
   

    square.addEventListener('click', function () {
        if(square.innerHTML === '') {
            square.innerHTML = currentPlayer
            currentGame[i] = currentPlayer
            changePlayer()
        }
        vencedor()
        console.log(tabuleiroNovo)
        console.log(currentGame)
    })    
}

function vencedor() {
    if(currentGame[0] === currentGame[1] && currentGame[1] === currentGame[2] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")



        newGame()
    }
    else if(currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5] && currentGame[3]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
    else if(currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8] && currentGame[6]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
    else if(currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
    else if(currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7] && currentGame[1]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
    else if(currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8] && currentGame[2]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
    else if(currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8] && currentGame[0]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }

    else if(currentGame[2] === currentGame[4] && currentGame[4] === currentGame[6] && currentGame[2]){
        changePlayer()
        atualizaPlacar()
        resultado.innerHTML = (currentPlayer + " Ganhou")
        newGame()
    }
}
