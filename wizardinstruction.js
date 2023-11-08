let next = document.getElementById("close") //cross icon 
next.addEventListener("click",()=>{ //click event 
    window.open("./wizardlyQuest.html","_self")
})
function playMusic(){//bg music 
    let audio = new Audio("./assets/princess.mp3");
    audio.play();
}
playMusic();