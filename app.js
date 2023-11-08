let play = document.getElementById("play")  //start play button 
play.addEventListener("click", start) //click event on play button 
function playMusic(){   //function for background music 
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}

window.onload=function(){
    playMusic(); // calling the function on window load
}
function start(){
    window.open("./name.html","_self") //refering to the name page 
}
