// let celula1 = document.getElementsByClassName("celula")[0]

// celula1.addEventListener("click", function (){
//     if(celula1.innerHTML === "X"){
//         celula1.innerHTML = "O"
//     }
//     else {
//         celula1.innerHTML = "X"
//     }
// })

let celulas = document.getElementsByClassName("celula")

let jogador1 = document.getElementById("jogador1")

let jogador2 = document.getElementById("jogador2")

// jogador1.addEventListener("click")


for (let i = 0; i < celulas.length; i++) {
    let cadacelula = celulas[i];
    
    cadacelula.addEventListener("click", function() {
        if(cadacelula.innerHTML === "X"){
            cadacelula.innerHTML = "O"
        }   
        else {
            cadacelula.innerHTML = "X"
        }
    })
}


