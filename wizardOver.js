let again = document.getElementById("again") //play again button 
let home = document.getElementById("home")  //home page button 

again.addEventListener("click",()=>{
    window.open("./wizardlyQuest.html","_self") //redirect to the game1 page 
})

home.addEventListener("click",()=>{
    window.open("./index.html","_self") //redirecting to the home page 
})
function playMusic(){ //bg music 
    let audio = new Audio("./assets/princess.mp3");
    audio.play();
}
playMusic();