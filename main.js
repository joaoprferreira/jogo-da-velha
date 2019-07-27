let plays = ["", "", "", "", "", "", "", "", ""]
let player = "x"

const victory = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["0", "3", "6"],
    ["6", "7", "8"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
]

init()

function init(){
    draw()
} 

function draw(){
    let fullBoard = ""
    for(const index in plays){
        fullBoard += `<div class="box" onClick="selectPosition(${index})">${plays[index]}</div>`
    }
    document.getElementById("board").innerHTML = fullBoard
}

function selectPosition(position){
    if(canSelectPosition(position)){
        plays[position] = player
        draw()
        validateVictory()
        togglePlayer()
    }
}

function togglePlayer(){
    if(player=="x"){
        player = "o"
    } else{
        player = "x"
    }
}

function validateVictory(){
    // player(jogador atual) - plays(todas as jogadas) - victory(combinaçoes de vitoria)
    let playerSelections = []

    // Seleciona as jogadas do jogador atual
    for(const index in plays){
        if(plays[index] == player){
            playerSelections.push(index)
        }
    }

    // ["0", "1", "2"],
    // ["3", "4", "5"],
    // ["0", "3", "6"],
    // ["6", "7", "8"],
    // ["1", "4", "7"],
    // ["2", "5", "8"],
    // ["0", "4", "8"],
    // ["2", "4", "6"]

    // Percorre a lista de combinação de vitoria
    for(const indexVictory in victory){
        const victoryRow = victory[indexVictory]
        const win = 3 
        let winPlayer = 0

        for(const indexVictoryRow in victoryRow){
            const victoryCol = victoryRow[indexVictoryRow]
           
            if(playerSelections.includes(victoryRow[indexVictoryRow])){
                // winPlayer = winPlayer + 1
                winPlayer++
            }
        }

        console.log(win, winPlayer)
            debugger

        if(win == winPlayer){
            alert(`Jogador ${player} venceu!!!`)
            return
        }
    }

}

//verifica se pode selecionar a posiçào , se ela esta vazia...
function canSelectPosition(position) {
    //verifico se a posicão é uma string vazia!
	if (plays[position].trim() == "") {
        //retorno verdadeiro, para continuar com o fluxo
        return true;
    }
    //retorno false e nao termina o fluxo
	alert("posição já selecionada");
	return false;
}   
