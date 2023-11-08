let game1 = document.getElementById("wizardltQuest") //game1
let game2 = document.getElementById("moleDestroyer") //game2

function playMusic(){ //bg music 
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}
playMusic();
game1.addEventListener("click",wizardly)//click event on the game1 button 
game2.addEventListener("click",mole)//click event on the game2 button 

function wizardly(){
    window.open("./wizardinstruction.html","_self")// refering to the game1 intruction page 
}
function mole(){
    window.open("./moleinstruction.html","_self")//refering to the game2 instruction page 
}