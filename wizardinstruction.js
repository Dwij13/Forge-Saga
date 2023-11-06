let next = document.getElementById("close")
next.addEventListener("click",()=>{
    window.open("./wizardlyQuest.html","_self")
})
function playMusic(){
    let audio = new Audio("./assets/princess.mp3");
    audio.play();
}
playMusic();