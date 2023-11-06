let play = document.getElementById("play")

function playMusic(){
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}
window.onload=function(){
    playMusic();

}
play.addEventListener("click", start)
function start(){

    window.open("./name.html","_self")
}
