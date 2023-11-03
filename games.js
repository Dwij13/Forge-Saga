let game1 = document.getElementById("wizardltQuest")
let game2 = document.getElementById("moleDestroyer")

game1.addEventListener("click",wizardly)
game2.addEventListener("click",mole)

function wizardly(){
    window.open("./wizardlyQuest.html","_self")
}
function mole(){
    window.open("./mole.html","_self")
}