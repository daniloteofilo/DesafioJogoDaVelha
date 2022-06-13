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
let arrayVazia = [[],[],[],[],[],[],[],[],[]]

function changePlayer () {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }    
}

// changeButton.addEventListener('click', changePlayer)

for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    // for (let j = 0; j < squares.length; j++) {
    //     const element = squares[j];
    // }

    square.addEventListener('click', function () {
        if(square.innerHTML === '') {
            square.innerHTML = currentPlayer
            arrayVazia[i].push(currentPlayer)
            changePlayer()
        }
        if(arrayVazia[0][0] === arrayVazia[1][0] && arrayVazia[1][0] === arrayVazia[2][0] && arrayVazia[0][0]){
            alert("Ganhou")
        }
        console.log(arrayVazia)
    })    
}


