let again = document.getElementById("again")
let home = document.getElementById("home")
let scoreboard = document.getElementById("score")
let high = document.getElementById("high")
let highscore=0;
again.addEventListener("click",()=>{
    window.open("./mole.html","_self")
})
home.addEventListener("click",()=>{
    window.open("./home.html","_self")
})


let value = localStorage.getItem("score")
scoreboard.innerHTML=value;
function playMusic(){
    let audio = new Audio("./assets/mole.mp3");
    audio.play();
}
playMusic();

if(value>highscore){
    highscore=value;
}
high.innerHTML=highscore;