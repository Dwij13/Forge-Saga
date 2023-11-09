let next = document.getElementById("close") //cross button 

next.addEventListener("click",()=>{ //click event on the cross button 
    window.open("./../../game1/game home/mole.html","_self")
})
function playMusic(){ //bg music 
    let audio = new Audio("./../../assets/mole.mp3");
    audio.play();
}
playMusic();