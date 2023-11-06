let game1 = document.getElementById("wizardltQuest")
let game2 = document.getElementById("moleDestroyer")

function playMusic(){
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}
playMusic();
game1.addEventListener("click",wizardly)
game2.addEventListener("click",mole)

function wizardly(){
    window.open("./wizardinstruction.html","_self")
}
function mole(){
    window.open("./moleinstruction.html","_self")
}