window.onload=function(){
    start();
}

let game = document.getElementById("game")
let scoreboard = document.getElementById("score")
let highscore = document.getElementById("high")
let timer = document.getElementById("time")
let currentTile;
let score = 0;
let username = document.getElementById("username")
let name1 = JSON.parse(localStorage.getItem("name"))
username.innerHTML=name1
let value=localStorage.getItem("score")
let high = 0;
let level = localStorage.getItem("level")
let moleTime=1000;
let levelTime=20;
let time;
if(value>high){
    high=value
}
highscore.innerHTML=high
function playMusic(){
    let audio = new Audio("./assets/mole.mp3");
    audio.play();
}
playMusic();

switch (level) {
    case "easy": moleTime=1000;levelTime=20
        
        break;
    case "medium": moleTime=800;levelTime=15
        
        break;
    case "hard": moleTime=500;levelTime=10
        
        break;

}
function start(){
    for(let i=0;i<9;i++){
        let block = document.createElement("div")
        // div id from 0-8
        block.id=i.toString();
        block.addEventListener("click",kill)
        game.appendChild(block)

    }
    setInterval(setMole,moleTime);
}
 
// numbers from 0-8
function random(){
    let num = Math.floor(Math.random()*9);
    return num.toString()
}

function setMole(){
    if(currentTile){
        currentTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./assets/Group 24.png";
    
    let number = random();
    currentTile = document.getElementById(number)
    currentTile.appendChild(mole);
}

function kill(){
   cursorChange()

    if( this == currentTile){
        score+=2;
        localStorage.setItem("score",score);
        scoreboard.innerHTML=score.toString();
        currentTile.innerHTML="";
        
    }
}
function gameTime(){
    time = levelTime;
    timer.textContent=time;
    setInterval(()=>{
        time--;
        timer.textContent=time;
        if(time==0){
            gameOver()
        }

    },1000)
}
gameTime()

function gameOver(){
    window.open("./moleOver.html","_self")
}
localStorage.setItem("score",score);

function cursorChange(){
   let hammer = document.getElementsByTagName("body")[0];
   hammer.style.cursor='url("./assets/Group 3.png") 50 0,auto'
    setTimeout(() => {
        hammer.style.cursor='url("./assets/Group 1.png")  50 0,auto'
    }, 100);
}
