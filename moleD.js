window.onload=function(){
    start();   //starting the start function on window load
}

let game = document.getElementById("game") //gamebox
let scoreboard = document.getElementById("score") //scorebox
let highscore = document.getElementById("high") //highscore box
let timer = document.getElementById("time")
let currentTile; //variable for the current div 
let score = 0; 
let username = document.getElementById("username")
let name1 = JSON.parse(localStorage.getItem("name")) //taking the username from the local storage
username.innerHTML=name1 //inserting the username in the box
let value=localStorage.getItem("score") //getting the score from the local storage
let high = localStorage.getItem("highScore") || 0; //gettting the highscore from the local storage
let level = localStorage.getItem("level") //getting the element of the level key 
let moleTime=1000; //leting a variable 
let levelTime=20;
let time;
if(value>high){
    high=value
    localStorage.setItem("highScore", high);  //condition for the updation of the highscore if the score is greater than the previous highscore
}
highscore.innerHTML=high
function playMusic(){ //bg music 
    let audio = new Audio("./assets/mole.mp3");
    audio.play();
}
playMusic();

switch (level) { //switch condition for different difficulty levels
    case "easy": moleTime=1000;levelTime=20 //if its easy the interval will be 1000ns and level timer will be 20 sec        
        break;
    case "medium": moleTime=800;levelTime=15 //if its mediun the interval will be 800ns and level timer will be 15 sec 
        
        break;
    case "hard": moleTime=500;levelTime=10 //if its hard the interval will be 500ns and level timer will be 10 sec 
        
        break;

}
function start(){
    for(let i=0;i<9;i++){ //loop runing from 0-9
        let block = document.createElement("div") //creating div's for the game
        
        block.id=i.toString();// div id from 0-8
        block.addEventListener("click",kill) //onclick event on the divs
        game.appendChild(block) //adding the created div's in the gamebox

    }
    setInterval(setMole,moleTime); // setinterval begining for the function setmole for variable moleTime
}
 
// random numbers from 0-8
function random(){
    let num = Math.floor(Math.random()*9);
    return num.toString()
}

function setMole(){
    if(currentTile){
        currentTile.innerHTML = ""; //to clear the div
    }

    let mole = document.createElement("img"); //creating the img tag inside the div
    mole.src = "./assets/Group 24.png"; //src for the created img 
    
    let number = random();
    currentTile = document.getElementById(number) //getting the div's with random index value
    currentTile.appendChild(mole);//adding the img to the generated div's
}

function kill(){ //killing and scoring function
   cursorChange()

    if( this == currentTile){ //if the click and the generated img is on the same div score will increase
        score+=2;
        localStorage.setItem("score",score); //adding the score in the local storage
        scoreboard.innerHTML=score.toString(); //adding the score in the score box
        if (score > high) { 
            high = score; //condition for highscore if score is more than high change high to score
            localStorage.setItem("highScore", high); //sttoring the high score in the local storage
            highscoreDisplay.innerHTML = high;//adding the highscore in the highscore box

        }

        currentTile.innerHTML=""; //empting the div
        playAudio("./assets/whack2.mp3") //soundeffect on click 

    }
}
function gameTime(){ //gametime having variable time
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
    window.open("./moleOver.html","_self") //refering to the gameover page
}
localStorage.setItem("score",score); //storing the score in the local storage

function cursorChange(){ //changing the custom cursor as hammer for game by changing the src for the cursor url img and using settimeout to change to default
   let hammer = document.getElementsByTagName("body")[0];
   hammer.style.cursor='url("./assets/Group 3.png") 50 0,auto'
    setTimeout(() => {
        hammer.style.cursor='url("./assets/Group 1.png")  50 0,auto'
    }, 100);
}
function playAudio(src){ //audio src
    let audio2 = new Audio(src);
    audio2.play();

}