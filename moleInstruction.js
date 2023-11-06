let next = document.getElementById("close")

next.addEventListener("click",()=>{
    window.open("./mole.html","_self")
})
function playMusic(){
    let audio = new Audio("./assets/mole.mp3");
    audio.play();
}
playMusic();