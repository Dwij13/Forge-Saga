let play = document.getElementById("play")
let invi = document.getElementById("invisible")
invi.addEventListener("click",music)

function playMusic(){
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}
function music(){
    playMusic();
}
window.onload=function(){
    music();
}
play.addEventListener("click", start)
function start(){

    window.open("./name.html","_self")
}
