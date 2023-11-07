let again = document.getElementById("again")
let home = document.getElementById("home")

again.addEventListener("click",()=>{
    window.open("./wizardlyQuest.html","_self")
})

home.addEventListener("click",()=>{
    window.open("./index.html","_self")
})
function playMusic(){
    let audio = new Audio("./assets/princess.mp3");
    audio.play();
}
playMusic();