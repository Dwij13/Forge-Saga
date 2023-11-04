let easy = document.getElementById("ease")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let music = document.getElementById("music")
let mute = document.getElementById("mute")
music.addEventListener("click",audio)
easy.addEventListener("click",play1)
medium.addEventListener("click",play2)
hard.addEventListener("click",play3)
function play1(){
    localStorage.setItem("level","easy")
    window.open("./moleD.html","_self")
}
function play2(){
    localStorage.setItem("level","medium")
    window.open("./moleD.html","_self")
}
function play3(){
    localStorage.setItem("level","hard")
    window.open("./moleD.html","_self")
}
function audio(){
    mute.setAttribute("src","./assets/mute.png")
}
