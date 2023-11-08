let again = document.getElementById("again") //playagain button 
let home = document.getElementById("home") //home page button 
let scoreboard = document.getElementById("score") //scorebox

again.addEventListener("click",()=>{ //click event for the buttons
    window.open("./mole.html","_self")
})
home.addEventListener("click",()=>{
    window.open("./index.html","_self")
})


let value = localStorage.getItem("score") //getting the value of score from the local storage
scoreboard.innerHTML=value; //adding the score value inside the scorebox
function playMusic(){ //bg music
    let audio = new Audio("./assets/mole.mp3");
    audio.play();
}
playMusic();
