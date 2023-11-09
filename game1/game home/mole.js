let easy = document.getElementById("ease")
let medium = document.getElementById("medium") //gamemodes
let hard = document.getElementById("hard")
let username= document.getElementById("username") //username box
let name1 = JSON.parse(localStorage.getItem("name")) //input name taken from the local storage 
username.innerHTML=name1 //inserting the username inside the username box
easy.addEventListener("click",play1)
medium.addEventListener("click",play2) //clcik event for the buttons 
hard.addEventListener("click",play3)
function play1(){
    localStorage.setItem("level","easy") //seting the element fot the key level as easy
    window.open("./../../game1/game page/moleD.html","_self")
}
function play2(){
    localStorage.setItem("level","medium")//seting the element fot the key level as medium
    window.open("./../../game1/game page/moleD.html","_self")
}
function play3(){
    localStorage.setItem("level","hard")//seting the element fot the key level as hard
    window.open("./../../game1/game page/moleD.html","_self")
}
function playMusic(){ //bg music
    let audio = new Audio("./../../assets/mole.mp3");
    audio.play();
}
playMusic();
